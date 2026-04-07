import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Settings, Subtitles, Star } from 'lucide-react';
import { useState } from 'react';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
}

interface VideoPlayerPageProps {
  onBack?: () => void;
  suggestedMovies?: Movie[];
}

export function VideoPlayerPage({ onBack, suggestedMovies }: VideoPlayerPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <div
          className="relative w-full bg-black"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <div className="relative w-full aspect-video max-h-[90vh] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1758232589439-f5ec09dc92c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Video Player"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="p-8 bg-gradient-to-r from-red-500/80 via-purple-600/80 to-blue-600/80 rounded-full backdrop-blur-md border-4 border-white/30 transition-all duration-300 group-hover:scale-110 shadow-2xl shadow-purple-500/50">
                {isPlaying ? (
                  <Pause className="w-16 h-16 text-white fill-current" />
                ) : (
                  <Play className="w-16 h-16 text-white fill-current ml-2" />
                )}
              </div>
            </button>

            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent transition-all duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="px-8 pt-8 pb-6">
                <div className="mb-4">
                  <div className="relative h-1.5 bg-white/20 rounded-full cursor-pointer group/progress">
                    <div className="absolute h-full w-[35%] bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-full"></div>
                    <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-white text-sm font-medium">45:32</span>
                    <span className="text-gray-400 text-sm">2:24:15</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-200 hover:scale-110"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white" />
                      )}
                    </button>

                    <button className="p-2.5 hover:bg-white/10 rounded-full transition-all duration-200">
                      <SkipBack className="w-5 h-5 text-white" />
                    </button>

                    <button className="p-2.5 hover:bg-white/10 rounded-full transition-all duration-200">
                      <SkipForward className="w-5 h-5 text-white" />
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2.5 hover:bg-white/10 rounded-full transition-all duration-200"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>

                    <div className="w-24 h-1 bg-white/20 rounded-full relative group/volume cursor-pointer">
                      <div className="absolute h-full w-[70%] bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="p-2.5 hover:bg-white/10 rounded-full transition-all duration-200">
                      <Subtitles className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2.5 hover:bg-white/10 rounded-full transition-all duration-200">
                      <Settings className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2.5 hover:bg-white/10 rounded-full transition-all duration-200">
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] px-12 py-8">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-3">Hành Trình Huyền Thoại</h1>
                <div className="flex items-center gap-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-white">9.2</span>
                  </div>
                  <span>2026</span>
                  <span>•</span>
                  <span>2g 24p</span>
                  <span>•</span>
                  <div className="px-3 py-1 border border-gray-500 rounded text-gray-300">13+</div>
                  <span>•</span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-200">
                    Hành động
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mb-12">
              Trải nghiệm cuộc hành trình điện ảnh ly kỳ nhất trong năm. Một câu chuyện về lòng dũng cảm,
              tình bạn và sức mạnh của những ước mơ sẽ khiến bạn nghẹt thở.
            </p>
          </div>
        </div>
      </div>

      {suggestedMovies && suggestedMovies.length > 0 && (
        <div className="bg-[#0a0a0a] px-12 py-8">
          <div className="max-w-[1920px] mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Phim đề xuất</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {suggestedMovies.map((movie) => (
                <div key={movie.id} className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-purple-500/30">
                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-full shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-bold text-xs">{movie.rating}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">{movie.title}</h3>
                      <p className="text-gray-400 text-xs">2026 • Hành động</p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 bg-white/90 rounded-full">
                        <Play className="w-6 h-6 text-black fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
