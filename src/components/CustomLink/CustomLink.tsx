"use client";

import { CustomLinkProps } from './CustomLink.props';
import { Link } from './CustomLink.styles';

export const CustomLink = ({
  href,
  children,
}: CustomLinkProps): JSX.Element => {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer' className='link'>
      {children}
    </Link>
  );
};