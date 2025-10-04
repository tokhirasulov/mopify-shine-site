import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Bubbles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 rounded-full bg-primary/10 border border-primary/20 animate-pulse"
              style={{
                animation: `bubble ${1.5 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                transform: `translate(${Math.cos((i * Math.PI * 2) / 6) * 50}px, ${Math.sin((i * Math.PI * 2) / 6) * 50}px)`,
              }}
            />
          ))}
        </div>
        
        {/* Logo/Text */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Mopify</h2>
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bubble {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) translateY(0);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
