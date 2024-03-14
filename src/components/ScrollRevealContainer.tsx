import { FC, useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
  move?: string;
  children: React.ReactNode;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,
        origin: move || "bottom",
        distance: "40px",
      });
  }, [move, sectionRef]);

  return <div ref={sectionRef}>{children}</div>;
};
export default ScrollRevealContainer;
