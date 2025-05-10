
import { useEffect, useState } from 'react';
import { Cloud, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CloudAnimation = () => {
  const [showCloud, setShowCloud] = useState(true);
  const [showCupid, setShowCupid] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);
  const [popBalloon, setPopBalloon] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const cloudTimeout = setTimeout(() => {
      setShowCupid(true);
    }, 1000);

    const cupidTimeout = setTimeout(() => {
      setShowBalloon(true);
    }, 1500);

    const balloonTimeout = setTimeout(() => {
      setPopBalloon(true);
    }, 3500);

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 4000);

    const hideCloudTimeout = setTimeout(() => {
      setShowCloud(false);
    }, 6000);

    return () => {
      clearTimeout(cloudTimeout);
      clearTimeout(cupidTimeout);
      clearTimeout(balloonTimeout);
      clearTimeout(textTimeout);
      clearTimeout(hideCloudTimeout);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {showCloud && (
        <div className="absolute animate-cloud-move">
          <Cloud size={80} className="text-white fill-white" />
        </div>
      )}

      {showCupid && (
        <div className="absolute top-1/3 animate-cupid-shoot">
          <div className="relative">
            {/* Simplified cupid - could be replaced with an SVG or image */}
            <div className="bg-love-soft-pink rounded-full h-16 w-16 flex items-center justify-center">
              <Heart size={24} fill="red" className="text-red-500" />
            </div>
          </div>
        </div>
      )}

      {showBalloon && (
        <div className="absolute">
          <div 
            className={cn(
              "relative transition-all duration-300",
              popBalloon ? "animate-balloon-pop" : "animate-float"
            )}
          >
            {/* Heart-shaped balloon */}
            <Heart 
              size={80} 
              fill="#FF6B8B" 
              className="text-red-400" 
            />
          </div>
        </div>
      )}

      {showText && (
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bubblegum text-center text-pink-500 animate-bounce-in px-4"
        >
          Heyyyy Saaaaaammm.......
        </h1>
      )}

      {showText && (
        <div className="absolute bottom-10 animate-bounce">
          <p className="text-lg text-pink-600 font-semibold">Scroll Down</p>
          <svg className="w-6 h-6 mx-auto text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default CloudAnimation;
