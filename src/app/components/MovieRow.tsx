import { ChevronLeft, ChevronRight, Star, Play, Plus } from 'lucide-react';
import { useRef } from 'react';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onMovieClick?: (movieId: string) => void;
}

export function MovieRow({ title, movies, onMovieClick }: MovieRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 800;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-16 group/section">
      <div className="px-12 mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="flex gap-2 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full border border-white/10 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full border border-white/10 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-12 scroll-smooth pb-4"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onMovieClick?.(movie.id)}
              className="flex-shrink-0 w-72 group/card cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-2xl group-hover/card:shadow-purple-500/40">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-[26rem] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover/card:opacity-90 transition-all duration-300"></div>

                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-full shadow-xl">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-bold text-sm">{movie.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2 line-clamp-2">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                    <span>2026</span>
                    <span>•</span>
                    <span>Hành động</span>
                    <span>•</span>
                    <span>2g 15p</span>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black font-semibold px-4 py-2.5 rounded-lg transition-all duration-200">
                      <Play className="w-4 h-4 fill-current" />
                      <span className="text-sm">Phát</span>
                    </button>
                    <button className="p-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-lg border border-white/30 transition-all duration-200">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
