import React from "react";
import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  width: string;
  height: string;
  [key: string]: string;
};

const RImage = ({ alt, src, width, height, ...props }: Props) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        position: "relative",
        cursor: "pointer",
        ...props,
      }}
    >
      <Image alt={alt} src={src} fill={true} {...props} />
    </div>
  );
};

export default RImage;
