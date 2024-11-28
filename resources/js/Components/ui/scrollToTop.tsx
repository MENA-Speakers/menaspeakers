// ScrollToTop.js
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  // State to track the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-mena-brand z-10 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
