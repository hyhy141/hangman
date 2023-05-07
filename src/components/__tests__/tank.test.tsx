import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tank from "../Tank";

describe("Tank component", () => {
  it("should render with correct image source", () => {
    const { getByAltText } = render(<Tank isLoser={false} />);
    const tankImg = getByAltText("tank");
    expect(tankImg).toHaveAttribute("src", "/tank.png");
  });

  it("should rotate when isLoser prop is true", () => {
    const { container } = render(<Tank isLoser={true} />);
    const tankImg = container.querySelector("img") as HTMLElement;
    expect(tankImg.style.transform).toBe("rotate(180deg)");
  });
});
