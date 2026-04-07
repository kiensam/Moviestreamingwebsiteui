import { Play, Plus, Share2, Star, Clock, Calendar } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
}

interface MovieDetailPageProps {
  onPlayClick?: () => void;
  onClose?: () => void;
  relatedMovies?: Movie[];
}

export function MovieDetailPage({ onPlayClick, onClose, relatedMovies }: MovieDetailPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="relative h-[75vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758232589439-f5ec09dc92c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Movie Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent"></div>
        </div>

        <div className="relative h-full flex items-end">
          <div className="max-w-[1920px] mx-auto px-12 w-full pb-16">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-bold text-lg">9.2</span>
                  <span className="text-gray-400 text-sm ml-1">/10</span>
                </div>
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-200 font-medium backdrop-blur-md">
                  Hành động
                </div>
                <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-200 font-medium backdrop-blur-md">
                  Phiêu lưu
                </div>
              </div>

              <h1 className="text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                Hành Trình Huyền Thoại
              </h1>

              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">2026</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">2g 24p</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="px-3 py-1 border-2 border-gray-400/60 rounded-lg text-gray-200 font-semibold bg-black/40 backdrop-blur-sm">
                  13+
                </div>
              </div>

              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl">
                Trải nghiệm cuộc hành trình điện ảnh ly kỳ nhất trong năm. Một câu chuyện về lòng dũng cảm,
                tình bạn và sức mạnh của những ước mơ sẽ khiến bạn nghẹt thở. Theo chân những người hùng
                trong cuộc phiêu lưu vĩ đại nhất của họ khi họ đối mặt với thử thách tưởng chừng như không thể vượt qua.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={onPlayClick}
                  className="flex items-center gap-3 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 hover:from-red-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/50"
                >
                  <Play className="w-6 h-6 fill-current" />
                  <span className="text-lg">Phát ngay</span>
                </button>
                <button className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all duration-300 hover:scale-105">
                  <Plus className="w-6 h-6" />
                  <span className="text-lg">Danh sách</span>
                </button>
                <button className="p-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-xl border border-white/30 transition-all duration-300 hover:scale-105">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Tóm tắt</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Trong một thế giới nơi ma thuật và công nghệ hòa quyện, một nhóm anh hùng không tình nguyện
                phải hợp tác để cứu vương quốc của họ khỏi bóng tối đang tiến gần. Với những hiệu ứng hình ảnh
                đột phá và cốt truyện cảm động, bộ phim này định nghĩa lại thể loại phim sử thi hiện đại.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Diễn viên</h2>
              <div className="flex flex-wrap gap-3">
                {['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C', 'Phạm Thị D', 'Hoàng Văn E'].map((actor) => (
                  <div key={actor} className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/10 text-gray-200 font-medium transition-all duration-200 cursor-pointer">
                    {actor}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Đạo diễn</h2>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg text-purple-200 font-medium inline-block backdrop-blur-md">
                Đạo diễn Xuất Sắc
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Thông tin phim</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Ngôn ngữ gốc</span>
                  <span className="text-white font-medium">Tiếng Việt</span>
                </div>
                <div className="flex justify-between">
                  <span>Phụ đề</span>
                  <span className="text-white font-medium">Có</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio</span>
                  <span className="text-white font-medium">CineMax Studios</span>
                </div>
                <div className="flex justify-between">
                  <span>Ngân sách</span>
                  <span className="text-white font-medium">$150M</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Đánh giá</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-white">9.2</span>
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm">Dựa trên 12,450 đánh giá</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedMovies && relatedMovies.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Phim liên quan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {relatedMovies.map((movie) => (
                <div key={movie.id} className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-purple-500/30">
                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-semibold text-xs">{movie.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white font-semibold text-sm line-clamp-2">{movie.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
