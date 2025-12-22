/* eslint-disable @next/next/no-img-element */
import React from "react";

type MockImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  [key: string]: unknown;
};

export default function MockImage({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: MockImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
}
