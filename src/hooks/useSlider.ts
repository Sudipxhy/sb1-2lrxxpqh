export default function useSlider(sliderId: string) {
  const slideLeft = () => {
    const slider = document.getElementById(sliderId);
    if (slider) slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(sliderId);
    if (slider) slider.scrollLeft += 500;
  };

  return { slideLeft, slideRight };
}