import { Star, Play, Plus } from 'lucide-react';
import { useState } from 'react';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
}

interface CategoryPageProps {
  movies?: Movie[];
  onMovieClick?: (movieId: string) => void;
}

const categories = [
  { id: 'all', name: 'Tất cả', color: 'from-gray-500 to-gray-600' },
  { id: 'action', name: 'Hành động', color: 'from-red-500 to-orange-600' },
  { id: 'anime', name: 'Anime', color: 'from-purple-500 to-pink-600' },
  { id: 'cartoon', name: 'Hoạt hình', color: 'from-blue-500 to-cyan-600' },
  { id: 'drama', name: 'Tâm lý', color: 'from-green-500 to-emerald-600' },
  { id: 'comedy', name: 'Hài kịch', color: 'from-yellow-500 to-amber-600' },
  { id: 'horror', name: 'Kinh dị', color: 'from-red-700 to-red-900' },
  { id: 'romance', name: 'Lãng mạn', color: 'from-pink-500 to-rose-600' },
];

export function CategoryPage({ movies = [], onMovieClick }: CategoryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'newest'>('popular');

  const defaultMovies: Movie[] = [
    {
      id: '1',
      title: 'Huyền Thoại Đô Thị',
      imageUrl: 'https://images.unsplash.com/photo-1573917308539-f1ba0c83ae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.9,
    },
    {
      id: '2',
      title: 'Giấc Mơ Tòa Nhà',
      imageUrl: 'https://images.unsplash.com/photo-1758232589439-f5ec09dc92c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.2,
    },
    {
      id: '3',
      title: 'Xác Sống Biết Đi',
      imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.7,
    },
    {
      id: '4',
      title: 'Biên Niên Sử Bí Ẩn',
      imageUrl: 'https://images.unsplash.com/photo-1701275998609-119e2c09f443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.5,
    },
    {
      id: '5',
      title: 'Thiên Đường Điện Ảnh',
      imageUrl: 'https://images.unsplash.com/photo-1572188863110-46d457c9234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.1,
    },
    {
      id: '6',
      title: 'Kỷ Nguyên Vàng',
      imageUrl: 'https://images.unsplash.com/photo-1628406690081-9755572fcd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.3,
    },
    {
      id: '7',
      title: 'Đêm Neon',
      imageUrl: 'https://images.unsplash.com/photo-1554875032-2de0215e64c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.8,
    },
    {
      id: '8',
      title: 'Cuộc Truy Đuổi',
      imageUrl: 'https://images.unsplash.com/photo-1738574307408-69709065c8cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.0,
    },
    {
      id: '9',
      title: 'Sấm Sét Tấn Công',
      imageUrl: 'https://images.unsplash.com/photo-1773856278276-a8071212c658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.6,
    },
    {
      id: '10',
      title: 'Tốc Độ',
      imageUrl: 'https://images.unsplash.com/photo-1765962906022-210b08afe469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.4,
    },
    {
      id: '11',
      title: 'Chiến Binh Đường Phố',
      imageUrl: 'https://images.unsplash.com/photo-1619164816991-22d393238d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 8.7,
    },
    {
      id: '12',
      title: 'Không Thể Ngăn Cản',
      imageUrl: 'https://images.unsplash.com/photo-1773761541805-24e73c6a7bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      rating: 9.3,
    },
  ];

  const displayMovies = movies.length > 0 ? movies : defaultMovies;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16">
      <div className="max-w-[1920px] mx-auto px-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Khám phá theo thể loại</h1>
          <p className="text-gray-400 text-lg">Tìm kiếm bộ phim yêu thích của bạn theo thể loại</p>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/30 scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="text-gray-300">
            <span className="font-semibold text-white">{displayMovies.length}</span> phim
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-400">Sắp xếp theo:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'popular' | 'rating' | 'newest')}
              className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              <option value="popular" className="bg-gray-900">Phổ biến nhất</option>
              <option value="rating" className="bg-gray-900">Đánh giá cao</option>
              <option value="newest" className="bg-gray-900">Mới nhất</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {displayMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onMovieClick?.(movie.id)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/40">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-[28rem] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300"></div>

                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-full shadow-xl">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-bold text-sm">{movie.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                    <span>2026</span>
                    <span>•</span>
                    <span>Hành động</span>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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

        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}
