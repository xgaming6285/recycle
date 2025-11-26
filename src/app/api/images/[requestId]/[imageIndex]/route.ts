import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import RequestModel from '@/models/Request';

// This endpoint serves images stored as Base64 in MongoDB
// Used by CallMeBot to fetch images for Signal notifications
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ requestId: string; imageIndex: string }> }
) {
  try {
    const { requestId, imageIndex } = await params;
    const index = parseInt(imageIndex, 10);

    if (isNaN(index) || index < 0) {
      return NextResponse.json(
        { error: 'Invalid image index' },
        { status: 400 }
      );
    }

    await dbConnect();
    
    const requestDoc = await RequestModel.findById(requestId);
    
    if (!requestDoc) {
      return NextResponse.json(
        { error: 'Request not found' },
        { status: 404 }
      );
    }

    const images = requestDoc.images || [];
    
    if (index >= images.length) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    const base64String = images[index];
    
    // Parse the base64 data URL
    // Format: data:image/jpeg;base64,/9j/4AAQSkZJRg...
    const matches = base64String.match(/^data:(.+);base64,(.+)$/);
    
    if (!matches) {
      return NextResponse.json(
        { error: 'Invalid image format' },
        { status: 400 }
      );
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    const imageBuffer = Buffer.from(base64Data, 'base64');

    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Length': imageBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return NextResponse.json(
      { error: 'Failed to serve image' },
      { status: 500 }
    );
  }
}

