import React, { useEffect, useRef } from 'react';

const InlineNewsLetterForm: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.bitrix24.com/b25531643/crm/form/loader_75.js?' + (Date.now() / 180000 | 0);
    script.async = true;
    script.dataset.b24Form = "inline/75/3yyncr";
    script.dataset.skipMoving = "true";

    if (divRef.current) {
      divRef.current.appendChild(script);
    }

    // Create a style tag
    const style = document.createElement('style');
    // Add CSS rule to the style tag
    style.innerHTML = `
      .b24-form-content {
        padding: 0 !important;
      },

    `;
    // Append the style tag to the head of the document
    document.head.appendChild(style);

    // Cleanup function to remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div ref={divRef} style={{ width: '100%', height: '100%' }} />;
}

export default InlineNewsLetterForm;
