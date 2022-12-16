import { useEffect, useState, useRef, RefObject } from 'react';

export const useInteractionObserver = (ref: RefObject<HTMLElement>) => {
  const observerRef = useRef<IntersectionObserver | any>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};
