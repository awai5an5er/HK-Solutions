"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Form from "./Form";

function ContactBtn({ text, classes }: { text: string; classes: string }) {
  const [popup, setPopup] = useState(false);
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
            <Form popup={popup} setPopup={setPopup} />
          </div>,
          document.body
        )}
    </div>
  );
}

export default ContactBtn;
