import { ReactNode } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

interface SmoothLinkProps {
  link?: string;
  action?: () => void;
  scrollToTop?: boolean;
  className?: string;
  children: ReactNode;
}

export default function SmoothLink({
  link,
  action,
  scrollToTop,
  className,
  children,
}: SmoothLinkProps) {
  const handleClick = () => {
    action && action();
    scrollToTop && scroll.scrollToTop();
  };

  return (
    <Link
      activeClass="active"
      to={link || ""}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}
