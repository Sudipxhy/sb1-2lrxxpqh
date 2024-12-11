import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../../types/movie';
import MovieCard from './MovieCard';
import useSlider from '../../hooks/useSlider';

interface MovieSliderProps {
  movies: Movie[];
  sliderId: string;
}

export default function MovieSlider({ movies, sliderId }: MovieSliderProps) {
  const { slideLeft, slideRight } = useSlider(sliderId);

  return (
    <div className="relative group">
      <ChevronLeft
        onClick={slideLeft}
        className="absolute left-0 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 text-white"
      />
      <div
        id={sliderId}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <ChevronRight
        onClick={slideRight}
        className="absolute right-0 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-125 text-white"
      />
    </div>
  );
}