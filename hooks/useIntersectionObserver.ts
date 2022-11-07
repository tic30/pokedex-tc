import { useEffect, useState, useRef } from "react";

/**
 * Scroll into view detector
 * @param targetElement
 * @returns a boolean value that says whether the targetElement is in view
 */
const useIntersectionObserver = (targetElement?: Element | null): boolean => {
  const [isElementInViewport, setIsElementInViewport] = useState(false);
  const intersectionObserver = useRef<IntersectionObserver>();

  useEffect(() => {
    if (intersectionObserver.current && targetElement) {
      intersectionObserver.current.observe(targetElement);
    }
  }, [targetElement]);

  // Cleanup observer
  useEffect(() => {
    if (!intersectionObserver.current) {
      intersectionObserver.current = new IntersectionObserver((entries) => {
        // A number > 0 means element is in view port
        if (entries[0].intersectionRatio > 0) {
          setIsElementInViewport(true);
        } else {
          setIsElementInViewport(false);
        }
      });
    }

    return () => intersectionObserver.current?.disconnect();
  }, []);

  return isElementInViewport;
};

export default useIntersectionObserver;
