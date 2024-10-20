'use client';
import React, { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Globe = dynamic(() => import('react-globe.gl'), { 
  ssr: false,
  loading: () => <p>Loading Globe...</p>
});

const InteractiveGlobe = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [error, setError] = useState(null);
  const [rad,setRad] =useState(2);

  const handleGlobeClick = useCallback(({ lat, lng }) => {
      setSelectedArea({ 
        center: { lat: parseFloat(lat.toFixed(4)), lng: parseFloat(lng.toFixed(4)) },
        radius: 4 // Fixed radius of 2 degrees
      });
  }, []);

  const ringData = useMemo(() => {
    return selectedArea ? [{
      lat: selectedArea.center.lat,
      lng: selectedArea.center.lng,
      maxRadius: selectedArea.radius,
      propagationSpeed: 1,
      repeatPeriod: 0
    }] : [];
  }, [selectedArea]);

  const labelData = useMemo(() => {
    return selectedArea ? [{
      lat: selectedArea.center.lat,
      lng: selectedArea.center.lng,
      text: '!',
      size: 1,
      altitude: 0.01
    }] : [];
  }, [selectedArea]);

  const globeConfig = useMemo(() => ({
    globeImageUrl: '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    bumpImageUrl: '//unpkg.com/three-globe/example/img/earth-topology.png',
    backgroundImageUrl: '//unpkg.com/three-globe/example/img/night-sky.png',
    onGlobeClick: handleGlobeClick,
    ringsData: ringData,
    ringColor: () => 'rgba(255, 0, 0, 0.2)',
    ringMaxRadius: 'maxRadius',
    ringPropagationSpeed: 'propagationSpeed',
    ringRepeatPeriod: 'repeatPeriod',
    labelsData: labelData,
    labelText: 'text',
    labelSize: 'size',
    labelAltitude: 'altitude',
    labelDotRadius: 0.5,
    labelColor: () => 'red',
  }), [handleGlobeClick, ringData, labelData]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Globe 
        {...globeConfig} 
        onGlobeReady={() => console.log('Globe is ready')}
        onGlobeError={(e) => {
          console.error('Globe error:', e);
          setError(e.message);
        }}
      />
      {selectedArea && (
        <div style={{
          position: 'absolute',
          top: 150,
          left: 10,
          background: 'rgba(255,255,255,0.8)',
          padding: '10px',
          borderRadius: '5px',
          color: 'black',
        }}>
          Selected Area Center: {selectedArea.center.lat.toFixed(4)}, {selectedArea.center.lng.toFixed(4)}
          <br />
          Radius: <input type="range" min={2} max={10} onChange={(e)=>setRad(e.target.value)} value={rad} />{rad} degrees
        </div>
      )}

      {selectedArea && (
              <Link
                 href={`/generate?lat=${selectedArea.center.lat}&lng=${selectedArea.center.lng}&rad=${rad}`}
                 className="absolute bottom-10 right-10 bg-[#c5c9c6] text-black text-[#374151] h-8 p-3 hover:bg-gray-300 px-3 py-1 rounded"
                 >
                Select this location
              </Link>
            )}
    </div>
  );
};

export default InteractiveGlobe;