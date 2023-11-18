import Navbar from "../navbar/Navbar";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CARDS_DATA } from "../card/card-data";
import DashboardCard from "../card/DashboardCard";

export default function Home() {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#624bff] pb-[9.5rem] pt-[4rem]"></div>
      <div className="container-fluid px-[2rem] mt-[-10rem]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="inline text-white font-medium text-2xl mx-[2rem] ">
              Dashboard
            </h1>
          </div>
          <div className="flex-end mr-5">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font- text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            >
              <Link>Crea nuovo progetto</Link>
            </button>
          </div>
        </div>
        <div className="grid grid-flow-col">
          <DashboardCard {...CARDS_DATA[0]} />
          <DashboardCard {...CARDS_DATA[1]} />
          <DashboardCard {...CARDS_DATA[2]} />
          <DashboardCard {...CARDS_DATA[3]} />
        </div>
      </div>

      <div className="grid grid-rows-5 grid-flow-col">
        {data.map((dataObj) => {
          return (
            <Card
              key={dataObj.id}
              image={dataObj.image}
              title={dataObj.title}
              description={dataObj.description}
            />
          );
        })}
      </div>
    </>
  );
}
