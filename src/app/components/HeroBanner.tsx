import { Play, Info, Star } from 'lucide-react';

export function HeroBanner() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758232589439-f5ec09dc92c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Featured Movie"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-[1920px] mx-auto px-12 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-red-500/30 via-purple-500/30 to-blue-500/30 border border-purple-400/40 rounded-full text-purple-200 backdrop-blur-md text-sm font-medium shadow-lg shadow-purple-500/20">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Mới phát hành
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-white font-semibold text-sm">9.2</span>
                <span className="text-gray-400 text-xs ml-1">IMDb</span>
              </div>
            </div>

            <h1 className="text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              Hành Trình <br />
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Huyền Thoại</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg">
              Trải nghiệm cuộc hành trình điện ảnh ly kỳ nhất trong năm. Một câu chuyện về lòng dũng cảm,
              tình bạn và sức mạnh của những ước mơ sẽ khiến bạn nghẹt thở.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                <span className="text-green-400 font-bold text-base">95%</span>
                <span className="text-gray-300 text-sm">Phù hợp</span>
              </div>
              <div className="px-3 py-1.5 border-2 border-gray-400/60 rounded-lg text-gray-200 text-sm font-semibold bg-black/30 backdrop-blur-sm">
                13+
              </div>
              <span className="text-gray-300 text-base font-medium">2026</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300 text-base font-medium">2g 24p</span>
              <span className="text-gray-400">•</span>
              <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-200 text-sm font-medium backdrop-blur-sm">Hành động</span>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <button className="flex items-center gap-3 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 hover:from-red-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70">
                <Play className="w-6 h-6 fill-current" />
                <span className="text-lg">Phát ngay</span>
              </button>
              <button className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold px-10 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <Info className="w-6 h-6" />
                <span className="text-lg">Thông tin</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
