import { useState, useEffect, useRef } from "react";

export default function Test() {
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the div is visible
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer when unmounting
  }, []);

  return (
   <>
    <div className="flex flex-col items-center justify-center min-h-[200vh]">
      <div
        ref={divRef}
        className={`w-60 h-40 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded transition-all duration-1000  ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        I'm Visible Now!
      </div>

    </div>

    
   </>
  );
}
