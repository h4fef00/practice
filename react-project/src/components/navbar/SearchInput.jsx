function SearchInput() {
  return (
    <div className="ml-5 ">
      <form>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cerca"
          />
        </div>
      </form>
    </div>
  );
}
export default SearchInput;
