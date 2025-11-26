import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import RequestModel from '@/models/Request';
import { sendSignalNotification, formatSignalMessage, sendSignalImages, getImageUrls } from '@/lib/signal';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, material, quantity, location, phone, images } = body;

    if (!name || !material || !quantity || !location || !phone) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    const newRequest = await RequestModel.create({
      name,
      material,
      quantity,
      location,
      phone,
      images: images || [],
    });

    // Get the base URL from the request or environment
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                    request.headers.get('origin') || 
                    'http://localhost:3000';

    const imageList = images || [];
    
    // Send beautifully formatted Signal Notification (including image count)
    const notificationMessage = formatSignalMessage({
      name,
      material,
      quantity,
      location,
      phone,
      imageCount: imageList.length,
    });
    
    // Must await on Vercel - serverless functions terminate immediately after response
    // If we don't await, the notification fetch gets killed before completion
    try {
      // First send the main notification text
      await sendSignalNotification(notificationMessage);
      
      // Then send the images if any are attached
      // CallMeBot has rate limiting, so we need to wait before sending images
      if (imageList.length > 0) {
        // Wait 3 seconds before sending images to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const imageUrls = getImageUrls(baseUrl, newRequest._id.toString(), imageList.length);
        await sendSignalImages(imageUrls);
      }
    } catch (err) {
      console.error('Signal notification error:', err);
      // Don't fail the request if notification fails
    }

    return NextResponse.json({ success: true, data: newRequest }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating request:', error);
    
    // Check for payload too large error
    if (error.name === 'PayloadTooLargeError' || error.type === 'entity.too.large') {
       return NextResponse.json(
        { success: false, error: 'Images are too large. Please upload smaller images.' },
        { status: 413 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const requests = await RequestModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: requests });
  } catch (error: any) {
    console.error('Error fetching requests:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch requests' },
      { status: 500 }
    );
  }
}