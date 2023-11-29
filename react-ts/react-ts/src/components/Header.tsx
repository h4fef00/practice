import { ReactNode } from "react";

interface ImgProps {
  src: string;
  alt: string;
  children: ReactNode;
}
export default function Header({ src, alt, children }: ImgProps) {
  return (
    <>
      <img src={src} alt={alt} />
      {children}
    </>
  );
}
