import { expect, test } from "bun:test";
import { render, screen, within } from "@testing-library/react";
import Page from "../app/page";

test("homepage", () => {
  // render(<Page />);
  render(<Page />)

  const heading = screen.queryAllByRole("heading", {
    level: 2,
  })

  expect(heading).toBeDefined()

  const footer = within(screen.getByRole('contentinfo'))
  const link = within(footer.getByRole('link'))
  expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined()
});
