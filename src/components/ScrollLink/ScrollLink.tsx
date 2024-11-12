import { Link} from 'react-scroll';

import { ScrollLinkProps } from './ScrollLink.props';

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

