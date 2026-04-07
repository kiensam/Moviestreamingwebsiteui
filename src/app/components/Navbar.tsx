import { Search, Film, User, Heart, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export function Navbar({ currentPage = 'home', onNavigate, isLoggedIn = false, onLogout }: NavbarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(page);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/90 to-transparent backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1920px] mx-auto px-12 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <button onClick={handleClick('home')} className="flex items-center gap-3 group">
              <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                CineMax
              </span>
            </button>

            <div className="flex items-center gap-10">
              <button
                onClick={handleClick('home')}
                className={`relative text-base font-medium transition-all duration-300 ${
                  currentPage === 'home'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Trang chủ
                {currentPage === 'home' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></span>
                )}
              </button>
              <button
                onClick={handleClick('categories')}
                className={`relative text-base font-medium transition-all duration-300 ${
                  currentPage === 'categories'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Thể loại
                {currentPage === 'categories' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></span>
                )}
              </button>
              <button
                onClick={handleClick('top')}
                className={`relative text-base font-medium transition-all duration-300 ${
                  currentPage === 'top'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Xếp hạng
                {currentPage === 'top' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></span>
                )}
              </button>
              <button
                onClick={handleClick('new')}
                className={`relative text-base font-medium transition-all duration-300 ${
                  currentPage === 'new'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Mới cập nhật
                {currentPage === 'new' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></span>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 focus-within:border-purple-500/50 focus-within:bg-white/15">
              <Search className="w-5 h-5 text-gray-300" />
              <input
                type="text"
                placeholder="Tìm kiếm phim, diễn viên..."
                className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-72"
              />
            </div>

            {isLoggedIn ? (
              <>
                <button
                  onClick={handleClick('watchlist')}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 relative"
                  title="Danh sách yêu thích"
                >
                  <Heart className={`w-5 h-5 ${currentPage === 'watchlist' ? 'text-red-400 fill-red-400' : 'text-white'}`} />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300"
                  >
                    <User className="w-5 h-5 text-white" />
                  </button>

                  {showUserMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowUserMenu(false)}
                      ></div>
                      <div className="absolute right-0 top-full mt-2 w-56 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-purple-500/20 overflow-hidden z-50">
                        <div className="p-4 border-b border-white/10">
                          <p className="text-white font-semibold">Nguyễn Văn A</p>
                          <p className="text-gray-400 text-sm">user@email.com</p>
                        </div>
                        <div className="py-2">
                          <button
                            onClick={handleClick('watchlist')}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                          >
                            <Heart className="w-5 h-5" />
                            <span>Danh sách yêu thích</span>
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                            <SettingsIcon className="w-5 h-5" />
                            <span>Cài đặt</span>
                          </button>
                        </div>
                        <div className="border-t border-white/10 py-2">
                          <button
                            onClick={() => {
                              onLogout?.();
                              setShowUserMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-white/10 transition-all"
                          >
                            <LogOut className="w-5 h-5" />
                            <span>Đăng xuất</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={handleClick('login')}
                className="px-6 py-2.5 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 hover:from-red-600 hover:via-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
