import React, { useState, useEffect } from "react";

function Section({ children }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight + "px");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 570) {
        setWindowHeight("90vh");
      } else {
        setWindowHeight(window.innerHeight + "px");
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="section" style={{ height: `${windowHeight}` }}>
      {children}
    </section>
  );
}

export default Section;
