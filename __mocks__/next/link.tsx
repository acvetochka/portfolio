import React, { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href?: string;
  [key: string]: unknown;
};

export default function Link({ children }: LinkProps) {
  return <>{children}</>;
}
