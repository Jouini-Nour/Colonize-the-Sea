import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { lat, lng, rad } = await request.json();
    if (!lat || !lng) {
      return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
    }

    // Use the environment variable for the Flask API URL
    const flaskApiUrl = process.env.FLASK_API_URL || 'http://localhost:5000';
    
    const response = await fetch(`${flaskApiUrl}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "x": lat, "y": lng }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Backend API request failed: ${response.status} ${errorText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data', details: error.message }, { status: 500 });
  }
}