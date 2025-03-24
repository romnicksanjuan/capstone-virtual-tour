import React, { useEffect } from "react";

const VirtualTour: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.cloudpano.com/public/shareScript.js";
    script.async = true;
    script.setAttribute("data-short", "jXoYvGJ3l");  // Your CloudPano tour ID
    script.setAttribute("data-path", "tours");
    script.setAttribute("data-is-self-hosted", "false");
    script.setAttribute("width", "100%");
    script.setAttribute("height", "640px");

    const container = document.getElementById("cloudpano-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";  // Clean up on unmount
      }
    };
  }, []);

  return <div id="cloudpano-container" style={{ width: "100%", height: "px" , margin:'0 auto'}} />;
};

export default VirtualTour;
