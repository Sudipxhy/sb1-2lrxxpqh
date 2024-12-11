import React from 'react';
import { Movie } from '../../types/movie';
import MovieSlider from './MovieSlider';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div className="px-4 md:px-16 my-8">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <MovieSlider movies={movies} sliderId={`slider-${title}`} />
    </div>
  );
}