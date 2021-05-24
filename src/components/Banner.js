import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        infiiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="">
          <img
            src="https://links.papareact.com/6ff"
            loading="lazy"
            alt=""
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://links.papareact.com/6ff"
            loading="lazy"
            alt=""
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://links.papareact.com/7ma"
            loading="lazy"
            alt=""
            className=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
