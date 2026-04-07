import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MovieRow } from './components/MovieRow';
import { MovieDetailPage } from './components/MovieDetailPage';
import { VideoPlayerPage } from './components/VideoPlayerPage';
import { CategoryPage } from './components/CategoryPage';
import { TopMoviesPage } from './components/TopMoviesPage';

const trendingMovies = [
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
];

const actionMovies = [
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

const animeMovies = [
  {
    id: '13',
    title: 'Nhiệm Vụ Rồng',
    imageUrl: 'https://images.unsplash.com/photo-1629510254000-10f3afc69c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 9.4,
  },
  {
    id: '14',
    title: 'Hành Trình Linh Hồn',
    imageUrl: 'https://images.unsplash.com/photo-1745200853608-f6d6d57a1a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 9.1,
  },
  {
    id: '15',
    title: 'Giấc Mơ Không Gian',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.9,
  },
  {
    id: '16',
    title: 'Truyền Thuyết Huyền Bí',
    imageUrl: 'https://images.unsplash.com/photo-1701275998609-119e2c09f443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 9.2,
  },
  {
    id: '17',
    title: 'Chiến Binh Bầu Trời',
    imageUrl: 'https://images.unsplash.com/photo-1573917308539-f1ba0c83ae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.8,
  },
  {
    id: '18',
    title: 'Tình Bạn Vĩnh Cửu',
    imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 9.5,
  },
];

const cartoonMovies = [
  {
    id: '19',
    title: 'Vương Quốc Phép Thuật',
    imageUrl: 'https://images.unsplash.com/photo-1773856278276-a8071212c658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.5,
  },
  {
    id: '20',
    title: 'Đảo Phiêu Lưu',
    imageUrl: 'https://images.unsplash.com/photo-1765962906022-210b08afe469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.7,
  },
  {
    id: '21',
    title: 'Truyện Cổ Tích Kỳ Diệu',
    imageUrl: 'https://images.unsplash.com/photo-1628406690081-9755572fcd77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.9,
  },
  {
    id: '22',
    title: 'Những Người Bạn Rừng Xanh',
    imageUrl: 'https://images.unsplash.com/photo-1629510254000-10f3afc69c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.3,
  },
  {
    id: '23',
    title: 'Phiêu Lưu Đại Dương',
    imageUrl: 'https://images.unsplash.com/photo-1572188863110-46d457c9234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.6,
  },
  {
    id: '24',
    title: 'Thung Lũng Hạnh Phúc',
    imageUrl: 'https://images.unsplash.com/photo-1745200853608-f6d6d57a1a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    rating: 8.8,
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'categories' | 'top' | 'new' | 'detail' | 'player'>('home');
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as typeof currentPage);
  };

  const handleMovieClick = (movieId: string) => {
    setSelectedMovieId(movieId);
    setCurrentPage('detail');
  };

  const handlePlayClick = () => {
    setCurrentPage('player');
  };

  const allMovies = [...trendingMovies, ...actionMovies, ...animeMovies, ...cartoonMovies];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroBanner />
            <div className="relative -mt-32 z-10">
              <MovieRow
                title="Xu Hướng Hiện Nay"
                movies={trendingMovies}
                onMovieClick={handleMovieClick}
              />
              <MovieRow
                title="Hành Động & Giật Gân"
                movies={actionMovies}
                onMovieClick={handleMovieClick}
              />
              <MovieRow
                title="Bộ Sưu Tập Anime"
                movies={animeMovies}
                onMovieClick={handleMovieClick}
              />
              <MovieRow
                title="Hoạt Hình Kinh Điển"
                movies={cartoonMovies}
                onMovieClick={handleMovieClick}
              />
            </div>
            <div className="h-24"></div>
          </>
        );

      case 'categories':
        return <CategoryPage movies={allMovies} onMovieClick={handleMovieClick} />;

      case 'top':
        return <TopMoviesPage movies={allMovies.slice(0, 10)} onMovieClick={handleMovieClick} />;

      case 'new':
        return (
          <div className="pt-28">
            <HeroBanner />
            <div className="relative -mt-32 z-10">
              <MovieRow
                title="Mới Cập Nhật Tuần Này"
                movies={trendingMovies}
                onMovieClick={handleMovieClick}
              />
              <MovieRow
                title="Sắp Ra Mắt"
                movies={actionMovies}
                onMovieClick={handleMovieClick}
              />
              <MovieRow
                title="Phim Mới 2026"
                movies={animeMovies}
                onMovieClick={handleMovieClick}
              />
            </div>
            <div className="h-24"></div>
          </div>
        );

      case 'detail':
        return (
          <div className="pt-20">
            <MovieDetailPage
              onPlayClick={handlePlayClick}
              relatedMovies={trendingMovies.slice(0, 6)}
            />
          </div>
        );

      case 'player':
        return (
          <VideoPlayerPage
            suggestedMovies={actionMovies.slice(0, 6)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {currentPage !== 'player' && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      {renderPage()}
    </div>
  );
}