import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { flushSync } from "react-dom";

export const useToggle = (initialState = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export const useNavigate = () => {
  const history = useHistory();

  return useCallback(
    (to: string) => {
      if (!("startViewTransition" in document)) {
        history.push(to);
        window.scrollTo(0, 0);
        return;
      }

      (document as any).startViewTransition(() => {
        flushSync(() => {
          history.push(to);
        });
        window.scrollTo(0, 0);
      });
    },
    [history]
  );
};
