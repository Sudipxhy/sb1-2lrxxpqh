import React from 'react';
import { Play, Info } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      <div className="relative pt-48 px-4 md:px-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Stranger Things</h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>
        <div className="flex space-x-4">
          <Button icon={Play}>Play</Button>
          <Button variant="secondary" icon={Info}>More Info</Button>
        </div>
      </div>
    </div>
  );
}