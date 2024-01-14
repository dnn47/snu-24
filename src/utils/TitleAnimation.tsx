import React, { useEffect, useRef, useState, ReactNode } from "react";
import { translateThis } from "../utils/TranslateServices";
import { TypeAnimation } from "react-type-animation";

export const useTitleAnimation = (initialTitle: string) => {
  const hasMounted = useRef(false);
  const { String: title } = translateThis(initialTitle);
  const [typeAnimation, setTypeAnimation] = useState<ReactNode | string>("");

  useEffect(() => {
    if (hasMounted.current) {
      setTypeAnimation(
        <TypeAnimation
          sequence={[title]}
          wrapper="span"
          speed={{ type: "keyStrokeDelayInMs", value: 100 }}
          repeat={0}
          style={{
            whiteSpace: "pre-line",
            width: "50rem",
            display: "block",
          }}
          className="text-title text-left"
        />
      );
    } else {
      hasMounted.current = true;
    }
  }, [title]);

  return typeAnimation;
};
