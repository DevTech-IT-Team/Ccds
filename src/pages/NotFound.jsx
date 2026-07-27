import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden py-20 px-4">
    {/* Atmospheric Glow Orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-btn/10 rounded-full blur-[100px]" />
    </div>

    <div className="relative z-10 w-full max-w-2xl text-center">
      {/* 404 Large Display */}
      <div className="relative inline-block mb-4">
        <p className="text-9xl md:text-[180px] font-display font-extrabold text-white/10 leading-none select-none tracking-tighter">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-blue-glow uppercase tracking-[0.3em] bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
            Error Page
          </span>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-blue-glow/80 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist, has been removed, or was moved to a new address.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white font-semibold shadow-glow hover:scale-[1.02] transition-all"
          >
            <Home className="w-5 h-5" /> Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;