import React, { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Hardcoded panel data instead of fetching from API
  const panels = [
    {
      title: "What is Almaty?",
      content: "Almaty is the largest city in Kazakhstan.",
    },
    {
      title: "Why is it famous?",
      content: "It is known for its mountains and apples.",
    },
    // {
    //   title: "Was it the capital?",
    //   content: "Yes, from 1929 to 1997.",
    // },
  ];
//  debugger;
  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      {panels.map((panel, index) => (
        <Panel
          key={index}
          title={panel.title}
          isActive={activeIndex === index}
          onShow={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          {panel.content}
        </Panel>
      ))}
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
    console.log("The Praveen",title,isActive,onShow);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </section>
  );
}
