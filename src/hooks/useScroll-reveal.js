import { useEffect, useState } from "react";

function useScrollReveal(ref) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  function handleIntersection(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      setHasBeenSeen(true);
    }
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(ref.current);

    // Si el componente ya ha sido visto, establecer isVisible en true
    if (hasBeenSeen) {
      setIsVisible(true);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, options, hasBeenSeen]);

  return isVisible;
}

export default useScrollReveal;
