import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const maliciousInput = `<img src="x" onerror="alert('XSS via dangerouslySetInnerHTML')" />`;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Safe JSX Rendering (Escaped)</h2>
      <div>{maliciousInput}</div> {/* This is safe */}

      <h2 style={{ marginTop: "40px" }}>Unsafe Rendering (XSS risk)</h2>
      <div
        dangerouslySetInnerHTML={{ __html: maliciousInput }}
        style={{ color: "red" }}
      /> {/* ⚠️ This is unsafe */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
