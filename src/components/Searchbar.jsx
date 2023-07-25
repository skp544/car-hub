import { useState } from "react";
import { MagnifyingGlass, ModelIcon } from "../assets";
import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }) => {
  return (
    <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
      <img
        src={MagnifyingGlass}
        alt="maginifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const Searchbar = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the search bad");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          src={ModelIcon}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
