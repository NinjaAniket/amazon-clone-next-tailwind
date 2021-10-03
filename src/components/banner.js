import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Banner() {
  return (
    <div className="relative">
      <div className="z-20 absolute w-full h-32  bg-gradient-to-t from-gray-100 to-transparent bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        showArrows
      >
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71FSVYGiPEL._SX3000_.jpg"
            loading="lazy"
            alt="banner to show dates for sale"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71pDdzu6uxL._SX3000_.jpg"
            alt="smart phone banner of iqoo"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71rKhM1eugL._SX3000_.jpg"
            alt="banner with tag up to 65% off"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
}
