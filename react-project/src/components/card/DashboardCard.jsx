import { Link } from "react-router-dom";

export default function DashboardCard(props) {
  return (
    <>
      <div className="mt-[11rem] mx-7">
        <div className=" max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-lg mt-[-10rem]">
          <div className="flex justify-between items-center mb-2">
            <div className="cursor-pointer">
              <Link>
                <h5 className="font-normal tracking-wide text-gray-900 text-lg hover:underline hover:text-[#b1a5ff]">
                  {props.title}
                </h5>
              </Link>
            </div>
            <div className="bg-[#b1a5ff] rounded-[0.5rem] p-[0.7rem] justify-center">
              {props.icon}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{props.available}</h1>
            {/* numero prodotti finiti (finto) */}
          </div>
        </div>
      </div>
    </>
  );
}
