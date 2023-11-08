import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  return (
    <div className="container flex flex-col items-center justify-center py-8 mx-auto">
      <div className="w-[40%] p-4 bg-white border border-gray-300 rounded-lg shadow-2xl">
        <form className="space-y-5">
          <h5 className="text-xl font-bold text-[#4e3ccc] mt-4">Accedi</h5>
          <p className="mt-0 text-[#728289] text-base font-normal leading-6">
            Inserisci i tuoi dati
          </p>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#624bff] focus:border-[#624bff] block w-full p-2.5"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#624bff] focus:border-[#624bff] block w-full p-2.5"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-[#624bff] focus:border-[#624bff]"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 checked:bg-[#4e3ccc]"
              >
                Ricordami
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white hover:bg-[#4e3ccc] bg-[#624bff] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <Link to="/home">Login</Link>
          </button>
          <div className="text-sm font-medium text-[#4e3ccc] flex">
            <Link className="hover:text-[#624bff]">Crea account</Link>
            <Link className="ml-auto text-sm text-[#212b36] hover:text-[#4e3ccc]">
              Hai dimenticato la password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
