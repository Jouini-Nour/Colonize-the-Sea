'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GeneratePage() {
  const searchParams = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const rad = searchParams.get('rad');
  const [loading, setLoading] = useState(true);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowPdf(true);
    }, 3000); // 3 seconds timeout

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (showPdf) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <iframe src="/report.pdf" width="100%" height="100%" style={{border: 'none'}}></iframe>
      </div>
    );
  }

  return null;
}