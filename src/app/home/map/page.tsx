import Image from 'next/image';
import React from 'react';

export default function Map() {
  return (
    <div className='w-full h-full start flex-col'>
        <h1 className='mt-10'>Station map</h1>
        <div className="w-full h-full center">
            <Image src='/images/map.png' alt='map' width={360} height={360}/>
        </div>
    </div>
  );
}