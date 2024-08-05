import { useEffect, useState} from "react";
import Cards from "./Cards";
import axios from "axios";
import {Link} from "react-router-dom";

function Course() {
  const [book, setBook]=useState([]);
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">We're delightened to have you <span className=" text-pink-500">here! :)</span></h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime commodi autem sit amet quia earum voluptate optio ullam ipsum facilis a est similique, dolores corporis iusto cum, praesentium ratione soluta!
          Reprehenderit accusantium, hic beatae iste odio, ipsa modi aliquid eos ratione voluptate a ducimus molestiae temporibus quisquam harum illo veniam blanditiis nisi quas? Laboriosam doloribus deserunt in quaerat exercitationem culpa!
          Porro, id recusandae! Hic, unde, obcaecati consectetur cumque saepe animi porro ab dignissimos amet et dolores. Error alias soluta labore eveniet eligendi minus, quam sint, architecto iste quaerat blanditiis vero!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course;
