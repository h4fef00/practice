import Navbar from "../navbar/Navbar";
import "./Profile.css";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-[#f2f2f2] p-6">
        <div className="flex flex-col">
          <div className="border-b-[1px] border-[#dfe3e8] pb-4">
            <h1 className="font-bold text-xl">Profilo</h1>
          </div>
        </div>
        {/* sezione profilo con nav, bottone, nome, ecc */}
        <div className="flex flex-row items-center mt-5">
          <div className="flex-col grow">
            <div className="pt-28 rounded-t-md bg-cover-profile"></div>
            <div className="bg-white rounded-b-md shadow-sm">
              {/* sezione immagine profilo, nome, bottone */}
              <div className="flex items-center justify-between pt-4 pb-6 px-4">
                <div className="flex items-center">
                  {/* immagine profilo */}
                  <div className="relative flex justify-end items-end mt-[-4rem] me-[0.5rem]">
                    <img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-20 w-20 rounded-full ring ring-white"
                    />
                    <a className="absolute top-0 right-0 me-[-5px]">
                      <img
                        src="https://dash-ui-admin-template.vercel.app/images/svg/checked-mark.svg"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                  {/* nome e username */}
                  <div className="leading-4">
                    <h2 className="mb-0 text-2xl font-medium">Nome profilo</h2>
                    <p className="text-sm block">@nomeuser</p>
                  </div>
                </div>
                {/* buttone edit profilo */}
                <div>
                  <button
                    type="button"
                    className="py-2 px-4 text-sm focus:outline-none bg-white rounded-lg border border-[#624bff] hover:bg-[#624bff] text-[#624bff] hover:text-white"
                  >
                    <Link>Modifica profilo</Link>
                  </button>
                </div>
              </div>
              {/* lista con sezioni profilo */}
              <ul className="px-[1.25rem] border-t-[#dfe3e8] border flex flex-wrap m-0">
                <li className="list-margin py-[1rem]">
                  <a className="text-[15px] text-[#637381] active:text-[#624bff]">
                    Bacheca
                  </a>
                </li>
                <li className="list-margin py-[1rem]">
                  <a className="text-[15px]  text-[#637381]">Attività</a>
                </li>
                <li className="list-margin py-[1rem]">
                  <a className="text-[15px] text-[#637381]">File</a>
                </li>
                <li className="list-margin py-[1rem]">
                  <a className="text-[15px]  text-[#637381]">Teams</a>
                </li>
                <li className="list-margin py-[1rem]">
                  <a className="text-[15px]  text-[#637381]">Bacheca</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-[2rem]">
          <div className="flex flex-row">
            <div className="flex flex-col mb-8">
              <div className="rounded-[0.5rem] border-0">
                <div className="flex-auto p-[1.25rem] bg-[#fff]">
                  <h4 className="mb-[1rem] text-">About me</h4>
                  <span className="uppercase font-medium text-black text-xs">
                    bio
                  </span>
                  <p className="mt-[0.5rem] mb-[2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum nemo, beatae sint culpa officia sunt. Quidem natus,
                    quia quod magnam eligendi molestias ducimus tempora ex
                    mollitia praesentium nisi dicta. Recusandae.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}
