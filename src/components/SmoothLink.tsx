import { ReactNode } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

interface SmoothLinkProps {
  link?: string;
  action?: () => void;
  scrollToTop?: boolean;
  children: ReactNode;
  className: string;
}

export default function SmoothLink({
  link,
  action,
  scrollToTop,
  children,
  className,
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
      offset={-72}
      duration={500}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}
