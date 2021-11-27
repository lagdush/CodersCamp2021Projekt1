import { sum, hello } from "./helloWorld";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("should render h1", () => {
  hello();
  const header = document.getElementById("header");
  expect(header.innerText).toBe("Hello CodersCamp2021!");
});
