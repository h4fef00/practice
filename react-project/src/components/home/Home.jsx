import Navbar from "../navbar/Navbar";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
      <div className="bg-[#624bff] pt-[4rem] pb-[9.5rem]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="inline text-white font-medium text-2xl mx-[2rem]">
                Dashboard
              </h1>
            </div>
            <div className="flex-end">
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font- text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
              >
                <Link>Crea nuovo progetto</Link>
              </button>
            </div>
          </div>
          <DashboardCard />
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
