import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Heroheading() {
  const textRef = useRef(null);

  useGSAP(() => {
    let clutter = "";
    const splittedText = textRef.current.textContent.split("");

    splittedText.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    textRef.current.innerHTML = clutter;
    gsap.from(textRef.current, {
      y: 100,
      delay: 3,
      opacity: 0,
      stagger: 0.2,
    });
  });

  return (
    <div
      ref={textRef}
      className="w-full whitespace-nowrap  uppercase font-bold text-[10rem] font-[u8]"
    >
      arock
    </div>
  );
}

export default Heroheading;
