import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  once?: boolean;
}

export const useInView = (
  ref: RefObject<Element>,
  options: InViewOptions = {}
): boolean => {
  const { threshold = 0, once = false } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && once && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, once]);

  return isIntersecting;
};

export default useInView;