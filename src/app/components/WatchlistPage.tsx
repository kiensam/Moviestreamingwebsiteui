import { Heart, Play, X, Star, Clock } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
}

interface WatchlistPageProps {
  watchlist?: Movie[];
  onRemoveFromWatchlist?: (movieId: string) => void;
  onMovieClick?: (movieId: string) => void;
}

export function WatchlistPage({
  watchlist = [],
  onRemoveFromWatchlist,
  onMovieClick,
}: WatchlistPageProps) {
  const defaultWatchlist: Movie[] = [
    {
      id: '1',
      title: 'Hành Trình Huyền Thoại',
      imageUrl:
        'https://images.unsplash.com/photo-1758232589439-f5ec09dc92c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.2,
    },
    {
      id: '2',
      title: 'Không Thể Ngăn Cản',
      imageUrl:
        'https://images.unsplash.com/photo-1773761541805-24e73c6a7bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.3,
    },
    {
      id: '3',
      title: 'Tình Bạn Vĩnh Cửu',
      imageUrl:
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.5,
    },
  ];

  const displayWatchlist = watchlist.length > 0 ? watchlist : defaultWatchlist;

  if (displayWatchlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16">
        <div className="max-w-[1920px] mx-auto px-12">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-2xl">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h1 className="text-5xl font-bold text-white">Danh sách yêu thích</h1>
            </div>
            <p className="text-gray-400 text-lg">Các bộ phim bạn đã lưu để xem sau</p>
          </div>

          <div className="flex flex-col items-center justify-center py-24">
            <div className="mb-6 p-8 bg-white/5 rounded-full">
              <Heart className="w-24 h-24 text-gray-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Danh sách trống</h2>
            <p className="text-gray-400 text-lg mb-8">
              Bạn chưa thêm phim nào vào danh sách yêu thích
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 hover:from-red-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50">
              Khám phá phim
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16">
      <div className="max-w-[1920px] mx-auto px-12">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-2xl shadow-lg shadow-purple-500/30">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            <h1 className="text-5xl font-bold text-white">Danh sách yêu thích</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-lg">
              <span className="text-white font-semibold">{displayWatchlist.length}</span> phim đã lưu
            </p>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/10 transition-all duration-200">
                Sắp xếp
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/10 transition-all duration-200">
                Lọc
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {displayWatchlist.map((movie) => (
            <div
              key={movie.id}
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center gap-6 p-4">
                <div
                  onClick={() => onMovieClick?.(movie.id)}
                  className="relative flex-shrink-0 w-48 h-72 rounded-xl overflow-hidden cursor-pointer group/poster"
                >
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/poster:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300">
                    <div className="p-4 bg-white/90 rounded-full">
                      <Play className="w-8 h-8 text-black fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-full shadow-xl">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-bold text-sm">{movie.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 py-4">
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-white mb-3">{movie.title}</h2>
                    <div className="flex items-center gap-4 text-gray-300">
                      <span className="px-3 py-1 bg-white/10 rounded-lg text-sm">2026</span>
                      <span>•</span>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-200 text-sm">
                        Hành động
                      </span>
                      <span>•</span>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>2g 15p</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 line-clamp-2">
                    Trải nghiệm cuộc hành trình điện ảnh ly kỳ nhất trong năm. Một câu chuyện về
                    lòng dũng cảm, tình bạn và sức mạnh của những ước mơ sẽ khiến bạn nghẹt thở.
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onMovieClick?.(movie.id)}
                      className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 hover:from-red-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span>Phát ngay</span>
                    </button>
                    <button
                      onClick={() => onRemoveFromWatchlist?.(movie.id)}
                      className="flex items-center gap-2 bg-white/10 hover:bg-red-500/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-red-500/50 transition-all duration-300"
                    >
                      <X className="w-5 h-5" />
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromWatchlist?.(movie.id)}
                  className="flex-shrink-0 p-3 bg-white/10 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full border border-white/10 hover:border-red-500/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Chia sẻ danh sách</h3>
              <p className="text-gray-300">Chia sẻ danh sách yêu thích của bạn với bạn bè</p>
            </div>
            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300">
              Chia sẻ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
