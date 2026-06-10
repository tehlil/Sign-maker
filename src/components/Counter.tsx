import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    let observer: IntersectionObserver;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const startAnimation = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startAnimation();
        observer.disconnect();
      }
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={countRef}>{prefix}{count}{suffix}</span>;
};

export default Counter;
