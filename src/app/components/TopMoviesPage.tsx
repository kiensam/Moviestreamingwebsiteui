import { Star, Play, TrendingUp, Crown, Plus } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
}

interface TopMoviesPageProps {
  movies?: Movie[];
  onMovieClick?: (movieId: string) => void;
  onAddToWatchlist?: (movieId: string) => void;
}

export function TopMoviesPage({ movies = [], onMovieClick, onAddToWatchlist }: TopMoviesPageProps) {
  const defaultTopMovies: Movie[] = [
    {
      id: '1',
      title: 'Không Thể Ngăn Cản',
      imageUrl: 'https://images.unsplash.com/photo-1773761541805-24e73c6a7bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.5,
    },
    {
      id: '2',
      title: 'Giấc Mơ Tòa Nhà',
      imageUrl: 'https://images.unsplash.com/photo-1758232589439-f5ec09dc92c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.4,
    },
    {
      id: '3',
      title: 'Tình Bạn Vĩnh Cửu',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.3,
    },
    {
      id: '4',
      title: 'Thiên Đường Điện Ảnh',
      imageUrl: 'https://images.unsplash.com/photo-1572188863110-46d457c9234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.2,
    },
    {
      id: '5',
      title: 'Truyền Thuyết Huyền Bí',
      imageUrl: 'https://images.unsplash.com/photo-1701275998609-119e2c09f443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.1,
    },
    {
      id: '6',
      title: 'Cuộc Truy Đuổi',
      imageUrl: 'https://images.unsplash.com/photo-1738574307408-69709065c8cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.0,
    },
    {
      id: '7',
      title: 'Huyền Thoại Đô Thị',
      imageUrl: 'https://images.unsplash.com/photo-1573917308539-f1ba0c83ae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.9,
    },
    {
      id: '8',
      title: 'Truyện Cổ Tích Kỳ Diệu',
      imageUrl: 'https://images.unsplash.com/photo-1628406690081-9755572fcd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.9,
    },
    {
      id: '9',
      title: 'Đêm Neon',
      imageUrl: 'https://images.unsplash.com/photo-1554875032-2de0215e64c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.8,
    },
    {
      id: '10',
      title: 'Thung Lũng Hạnh Phúc',
      imageUrl: 'https://images.unsplash.com/photo-1745200853608-f6d6d57a1a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.8,
    },
  ];

  const displayMovies = movies.length > 0 ? movies : defaultTopMovies;

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-400 via-yellow-500 to-orange-500';
    if (rank === 2) return 'from-gray-300 via-gray-400 to-gray-500';
    if (rank === 3) return 'from-orange-400 via-orange-500 to-orange-600';
    return 'from-purple-500 via-purple-600 to-blue-600';
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Crown className="w-8 h-8 fill-current" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16">
      <div className="max-w-[1920px] mx-auto px-12">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white">Top 10 Phim Hay Nhất</h1>
          </div>
          <p className="text-gray-400 text-lg">Những bộ phim được đánh giá cao nhất tuần này</p>
        </div>

        <div className="space-y-6">
          {displayMovies.map((movie, index) => {
            const rank = index + 1;
            const isTopThree = rank <= 3;

            return (
              <div
                key={movie.id}
                onClick={() => onMovieClick?.(movie.id)}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  isTopThree
                    ? 'shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50'
                    : 'hover:shadow-xl hover:shadow-purple-500/20'
                }`}
              >
                <div className="flex items-center bg-gradient-to-r from-black/90 via-black/80 to-transparent backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`absolute -left-4 top-0 bottom-0 w-32 flex items-center justify-center bg-gradient-to-r ${getRankColor(
                        rank
                      )} transform -skew-x-12 shadow-2xl`}
                    >
                      <div className="transform skew-x-12 flex flex-col items-center">
                        {getRankIcon(rank)}
                        <span
                          className={`font-black ${
                            isTopThree ? 'text-5xl' : 'text-4xl'
                          } text-white drop-shadow-lg`}
                        >
                          #{rank}
                        </span>
                      </div>
                    </div>

                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      className={`${
                        isTopThree ? 'w-80 h-[28rem]' : 'w-64 h-96'
                      } object-cover`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60"></div>
                  </div>

                  <div className="flex-1 px-12 py-8">
                    <div className="max-w-3xl">
                      <h2
                        className={`font-bold text-white mb-4 ${
                          isTopThree ? 'text-4xl' : 'text-3xl'
                        }`}
                      >
                        {movie.title}
                      </h2>

                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl backdrop-blur-md">
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                          <span className="text-white font-bold text-xl">{movie.rating}</span>
                          <span className="text-gray-300 text-sm">/10</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300">
                          <span className="px-3 py-1.5 bg-white/10 rounded-lg border border-white/10">
                            2026
                          </span>
                          <span>•</span>
                          <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-200">
                            Hành động
                          </span>
                          <span>•</span>
                          <span>2g 15p</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6 line-clamp-2">
                        Trải nghiệm cuộc hành trình điện ảnh ly kỳ nhất trong năm. Một câu chuyện
                        về lòng dũng cảm, tình bạn và sức mạnh của những ước mơ.
                      </p>

                      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onMovieClick?.(movie.id);
                          }}
                          className="flex items-center gap-3 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 hover:from-red-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/50"
                        >
                          <Play className="w-5 h-5 fill-current" />
                          <span>Phát ngay</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToWatchlist?.(movie.id);
                          }}
                          className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 transition-all duration-200"
                          title="Thêm vào danh sách"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {isTopThree && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-2xl animate-pulse">
                      <TrendingUp className="w-5 h-5 text-white" />
                      <span className="text-white font-bold text-sm">HOT</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Cập nhật hàng tuần</h3>
            <p className="text-gray-300">
              Danh sách Top 10 được cập nhật mỗi tuần dựa trên lượt xem và đánh giá của người dùng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
