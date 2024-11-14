import Search from "../../Assets/SVGs/Search";

const SearchContainer = () => {
  return (
    <div className="min-w-searchContainerWidth font-body">
      <div className="relative border-b-2 border-grey-300">
        <input
          placeholder="Search"
          className="p-5 min-w-10 bg-white outline-none text-base pl-10 w-full"
        />
        <span className="absolute left-3 top-0 bottom-0 m-auto flex items-center justify-center">
          <Search />
        </span>
      </div>

      <div className="min-h-ctaCardMax p-4 text-sm text-blue-300 text-center mt-8">
        Your search results will appear here
      </div>
    </div>
  );
};

export default SearchContainer;
