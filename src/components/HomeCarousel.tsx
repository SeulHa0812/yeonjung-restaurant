import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const HomeCarousel = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "0", // Navbar와의 간격 0으로!
      }}
    >
      <Carousel
        withIndicators
        withControls={false} // ← 화살표 없애기
        height={550}
        loop
        styles={{
          indicator: {
            width: 8,
            height: 8,
            backgroundColor: "#aaa",
          },
        }}
      >
        <Carousel.Slide>
          <div
            style={{
              backgroundColor: "#dcdcdc",
              height: "550px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            이미지 1 (추후 교체)
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div
            style={{
              backgroundColor: "#dcdcdc",
              height: "550px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            이미지 2 (추후 교체)
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div
            style={{
              backgroundColor: "#dcdcdc",
              height: "550px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            이미지 3 (추후 교체)
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
