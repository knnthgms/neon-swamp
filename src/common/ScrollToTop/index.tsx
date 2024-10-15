import { useCallback, useEffect, useState } from "react";
import { ScrollUpContainer } from "./styles";
import { FloatButton } from "antd";
import { UpOutlined } from "@ant-design/icons";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    const offsetFromTop = window.scrollY;

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  const scrollUp = () => {
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollUpContainer show={showScroll}>
      <FloatButton onClick={scrollUp} icon={<UpOutlined />} />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
