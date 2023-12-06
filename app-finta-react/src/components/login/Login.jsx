import "./Login.css";
export default function Login() {
  return (
    <>
      {/* contenitore */}
      <div className="flex flex-col items-center justify-center bg-white shadow-xl m-10">
        <div className="p-5">
          <div className="cursor-pointer">
            <h3 className="font-bold">Nome Sito</h3>
          </div>
          <div>
            <p>Please enter your user information.</p>
          </div>
        </div>
        {/* contenitore per label e input */}
        <div className="p-1">
          <div>
            <p className="font-bold">Username or email</p>
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email address here"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        {/* contenitore per label e input */}
        <div className="p-1">
          <div>Label</div>
          <div>Input</div>
        </div>
        {/* contenitore per label e input */}
        <div className="p-1">
          <div>Checkbox</div>
          <div>Label</div>
        </div>
        <div>
          <button>Log in</button>
        </div>
        <div>
          <div>Testo viola</div>
          <div>Testo nero</div>
        </div>
      </div>
    </>
  );
}
