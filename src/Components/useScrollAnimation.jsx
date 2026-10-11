import { useEffect, useRef } from 'react';

export default function useScrollAnimation(animationConfig = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const threshold = animationConfig.threshold ?? 0.15;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    }, { threshold });

    observer.observe(element);
    return () => observer.disconnect();
  }, [animationConfig.threshold]);

  return ref;
}