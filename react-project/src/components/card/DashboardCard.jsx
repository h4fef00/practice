import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa6";
export default function DashboardCard() {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex">
          <div>
            <Link>
              <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900">
                Prodotti
              </h5>
            </Link>
          </div>
          <div>
            <FaBriefcase />
          </div>
        </div>

        <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
