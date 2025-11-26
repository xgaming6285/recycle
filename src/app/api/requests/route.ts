import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import RequestModel from '@/models/Request';
import { sendSignalNotification } from '@/lib/signal';

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

    // Send Signal Notification
    const notificationMessage = `🚀 Ново Запитване!\n\n👤 Име: ${name}\n📦 Материал: ${material}\n⚖️ Количество: ${quantity}\n📍 Локация: ${location}\n📞 Телефон: ${phone}`;
    
    // Don't await this so the user response isn't delayed
    sendSignalNotification(notificationMessage).catch(err => 
      console.error('Background notification error:', err)
    );

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