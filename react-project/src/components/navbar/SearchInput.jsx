function SearchInput() {
  return (
    <div className="ml-5 ">
      <form>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[#624bff]"
            placeholder="Cerca"
          />
        </div>
      </form>
    </div>
  );
}
export default SearchInput;
