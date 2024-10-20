'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GeneratePage() {
    const searchParams = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const rad = searchParams.get('rad');
  
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lat, lng, rad }),
          });
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
  
      if (lat && lng) {
        fetchData();
      }
    }, [lat, lng, rad]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <main className="container mx-auto px-4 py-12 relative flex flex-col">

    <div>
      <h1>Generate Page</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
      <p>Radius: {rad}</p>
      {data && (
          <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
      </main>
  );
}