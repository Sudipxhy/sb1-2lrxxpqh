import React from 'react';
import { Movie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer hover:scale-105 transition">
      <img
        className="w-full h-auto rounded"
        src={movie.image}
        alt={movie.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 transition">
        <p className="text-white text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie.title}
        </p>
      </div>
    </div>
  );
}