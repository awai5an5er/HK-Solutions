"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Form from "./Form";

function ContactBtn({ text, classes }: { text: string; classes: string }) {
  const [popup, setPopup] = useState(false);
  const formPopup = useRef<HTMLDivElement>(null);
  useEffect(() => {
    popup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [popup]);
  return (
    <div>
      <button onClick={() => setPopup(true)} className={classes}>
        {text}
      </button>
      {popup &&
        createPortal(
          <div>
            <div
              onClick={() => setPopup(false)}
              className="fixed z-30 inset-0 w-full h-full backdrop-brightness-50 backdrop-blur-[5px]"
            ></div>
            <div
              ref={formPopup}
              className="fixed z-40 w-full h-[75vh] overflow-y-scroll md:w-2/3 lg:w-1/2 scroll-smooth inset-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            >
              <span
                onClick={() => setPopup(false)}
                className="text-center absolute right-7/100 top-7/100 md:right-5/100 md:top-7/100 z-10 rounded-2xl px-2 cursor-pointer"
              >
                X
              </span>
              <Form />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default ContactBtn;
