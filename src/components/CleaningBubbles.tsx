import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const CleaningBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate bubbles spread across the screen width
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 30 + 15,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 5,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-primary/5 border border-primary/10"
          style={{
            left: `${bubble.x}%`,
            bottom: '-50px',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animation: `rise ${bubble.duration}s ease-in infinite`,
            animationDelay: `${bubble.delay}s`,
            willChange: 'transform',
          }}
        />
      ))}

      <style>{`
        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CleaningBubbles;
