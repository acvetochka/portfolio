import { Link} from 'react-scroll';

import { ScrollLinkProps } from '@/types';

export const ScrollLink = ({
  children, to
}: ScrollLinkProps): JSX.Element => {
  return (
    <Link
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    href="/"
    className="link">
      {children}
    </Link>
  );
};

