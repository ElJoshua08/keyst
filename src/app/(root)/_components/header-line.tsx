"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const HeaderLine = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    let splitText = "";
    const textInWordsAndElements = ref.current.innerHTML.split(" ").map(
      (word, i) => {
        if (word.includes("<")) {
          // * We need to add the inside elements.
        } else {
          splitText += word.split("");
        }
      }
    );


    console.log(textInWordsAndElements);
    console.log("splitText", splitText);

    const textParts = [
      "W",
      "h",
      "e",
      "r",
      "e",
      " ",
      "e",
      "v",
      "e",
      "r",
      "y",
      " ",
      "<span class='text-green-500'>k</span>",
      "<span class='text-green-500'>e</span>",
      "<span class='text-green-500'>y</span>",
      " ",
      "f",
      "e",
      "e",
      "l",
      "s",
      " ",
      "j",
      "u",
      "s",
      "t",
      " ",
      "r",
      "i",
      "g",
      "h",
      "t",
      ".",
    ];

    const tl = gsap.timeline();


    ref.current.innerHTML = ""; // clear content


    textParts.forEach((part, _i) => {
      tl.to(ref.current, {
        duration: gsap.utils.random(0.1, 0.02),
        delay: gsap.utils.random(0.01, 0.1),
        onComplete: () => {
          ref!.current!.innerHTML += part;
        },
      });
    });
  }, [ref]);

  return (
    <h2 ref={ref} className="text-7xl font-medium font-header">
      Where every <span className="text-lime-500">key</span> feels just right.
    </h2>
  );
};
