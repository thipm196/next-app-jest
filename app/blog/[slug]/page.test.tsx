/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page, { generateMetadata } from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("generateMetadata", async () => {
  const r = await generateMetadata({params: { slug: 'ahihi do ngoc'}})
  expect(r).toEqual({
      title: "Post: ahihi do ngoc",
    });
});
