import { Title } from "../Title";
import { VerticalSlider } from "./VerticalSlider";
import { verticalSliderData } from "./sliderData";

export const VerticalSliderWrapper = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      <Title>Salas disponíveis</Title>

      <VerticalSlider items={verticalSliderData} />
    </div>
  );
};
