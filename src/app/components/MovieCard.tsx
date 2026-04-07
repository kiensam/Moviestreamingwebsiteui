import { Star } from 'lucide-react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
}

export function MovieCard({ title, imageUrl, rating }: MovieCardProps) {
  return (
    <div className="group relative flex-shrink-0 w-[220px] cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10">
      <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/30">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[330px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-semibold text-white mb-2">{title}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-white font-medium">{rating}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-white text-white" />
            <span className="text-xs font-bold text-white">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
