import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden">
    {/* orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-mid/15 rounded-full blur-[80px]" />
    </div>

    <div className="relative text-center px-4">
      <p className="text-8xl md:text-[160px] font-display font-bold text-white/10 leading-none select-none mb-0">
        404
      </p>
      <div className="-mt-6 md:-mt-10">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-blue-glow text-lg mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue to-blue-btn text-white font-semibold shadow-glow hover:scale-105 transition-all"
          >
            <Home className="w-5 h-5" /> Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
