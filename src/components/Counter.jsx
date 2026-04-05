import React, { useState, useEffect, useRef } from 'react';

/**
 * A counter component that animates from 0 to a target value when it enters the viewport.
 * 
 * @param {number} end - The target value to count to.
 * @param {number} duration - Animation duration in milliseconds (default: 2000).
 * @param {string} suffix - Text to append after the number (e.g., '+', '%').
 * @param {string} prefix - Text to prepend before the number (e.g., '$').
 * @param {number} decimals - Number of decimal places to show (default: 0).
 */
const Counter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startCountAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated, end, duration]);

  const startCountAnimation = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = easedProgress * end;
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const formatNumber = (num) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default Counter;
