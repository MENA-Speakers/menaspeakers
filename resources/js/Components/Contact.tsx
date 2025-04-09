import { useEffect, useRef } from "react";

export default function Contact() {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.bitrix24.com/b25531643/crm/form/loader_13.js?" +
      ((Date.now() / 180000) | 0);
    script.async = true;
    script.dataset.b24Form = "inline/13/xdyhef";
    script.dataset.skipMoving = "true";

    if (divRef.current) {
      divRef.current.appendChild(script);
    }
  }, []);
  return <div ref={divRef} style={{ width: "100%", height: "100%" }}></div>;
}
