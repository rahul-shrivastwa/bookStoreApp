import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";

function Freebook() {
  const [book, setBook]=useState([]);
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get("https://book-app-mos8.onrender.com/book");
        setBook(res.data.filter((data)=> data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2"> Free Offered Course </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus dolores molestiae facere esse sint modi ipsum praesentium, exercitationem labore id ad illo necessitatibus quo dolore aspernatur quibusdam facilis doloribus!</p>
        </div>
      <div className="slider-container mt-8 mb-8">
        <Slider {...settings}>
          {book.map((item)=>(
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook;
