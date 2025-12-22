// Header.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

type MockScrollLinkProps = {
  to: string;
  children: React.ReactNode;
};

jest.mock("react-scroll", () => ({
  Link: ({ children, to }: MockScrollLinkProps) => (
    <a href={`#${to}`} data-to={to}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  it("renders links and handles click", async () => {
    render(<Header />);
    screen.debug();

    const link = screen.getByRole("link", { name: /projects/i });
    await userEvent.click(link);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("data-to", "projects");
  });
});
