import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import img1 from "@/assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg";
import img3 from "@/assets/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg";
import img2 from "@/assets/chris-ghinda-wK2ESlRRZQ8-unsplash.jpeg";
import img4 from "@/assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg";
import img5 from "@/assets/toa-heftiba-dti56waifB4-unsplash.jpeg";

export default function MainCarousel() {
  const images = [img1, img2, img4, img3, img5];

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <MdNavigateBefore
          className={"absolute top-1/2 left-0 text-white p-1 z-10"}
          onClick={onClickHandler}
        ></MdNavigateBefore>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <MdNavigateNext
          className={"absolute top-1/2 right-0 text-white p-1 z-10"}
          onClick={onClickHandler}
        ></MdNavigateNext>
      )}
    >
      {images.map((img, index) => (
        <div key={index}>
          <Image
            src={img}
            alt={`Image: ${index}`}
            className={"w-full object-cover "}
            style={{ height: "700px" }}
          />
          <div
            className="text-white p-5 rounded text-left absolute bg-black bg-opacity-40"
            style={{ left: "10%", top: "46%" }}
          >
            <p className={"text-sm pb-1 text-pink-400"}>-- NEW ITEMS</p>
            <h1 className={"pb-1"}>Summer Sale</h1>
            <p className={"text-lg underline font-bold text-pink-500"}>
              Discover More
            </p>
          </div>
        </div>
      ))}
    </Carousel>

    // <Carousel
    //   showArrows={true}
    //   // onChange={onChange}
    //   // onClickItem={onClickItem}
    //   // onClickThumb={onClickThumb}
    // >
    //   <div>
    //     <Image src={img1} alt={"test"} />
    //     <p className="legend">Legend 1</p>
    //   </div>
    //   <div>
    //     <img src={img2} alt={"test"} />
    //     <p className="legend">Legend 2</p>
    //   </div>
    // </Carousel>
  );
}
