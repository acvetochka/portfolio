import { Logo } from "@/components/Logo/Logo";
import { Navigation } from "@/components/Navigation/Navigation";

export const Header = ():JSX.Element => {
  return (
    <header>
      <Logo />
      <Navigation/>
    </header>
  );
};
