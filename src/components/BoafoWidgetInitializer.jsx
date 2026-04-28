import { useEffect } from "react";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
    
    // Load the widget script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js";
    script.setAttribute("data-api-key", BOAFO_API_KEY);
    script.defer = true;
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // nothing to render
}