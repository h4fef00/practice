import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow m-5 p-5 overflow-hidden">
      <Link>
        <img
          className="rounded-t-lg object-contain h-48 w-96 mt-2"
          src={props.image}
          alt={props.title}
        />
      </Link>
      <div>
        <Link>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h5>
        </Link>
        <p className="truncate mb-3 font-normal text-gray-700">
          {props.description}
        </p>
        <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-[#4e3ccc] bg-[#624bff] rounded-lg">
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
    </div>
  );
}
