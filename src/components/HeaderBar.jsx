import refresh from "../assets/images/refresh.png";
import clipboard from "../assets/images/clipboard.png";
import menu from "../assets/images/menu-01.png";
import search from "../assets/images/search-icon.png";
import { useState, useRef } from "react";

const HeaderBar = ({ data, setData, originalData }) => {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(data);

  const getQuery = (e) => {
    e.preventDefault();
    console.log(searchQuery);

    const filteredTasks = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredTasks);
  };

  const copySearch = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      alert("Copied!");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center p-5  border-b-3 border-border-color ">
        <h2 className="font-creato-medium text-3xl">NSPG Price Guide</h2>
        <div>
          <form className="flex items-center gap-[8px]" onSubmit={getQuery}>
            <div className="relative">
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <img src={search} alt="" />
              </button>
              <input
                className="border border-[#D0D5DD] rounded-lg p-[10px] pl-10"
                type="search"
                placeholder="Filter Items"
                name=""
                id=""
                ref={inputRef}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                value={searchQuery}
              />
            </div>

            <button
              onClick={() => {
                setSearchQuery("");
                setData(originalData);
              }}
              className="px-[14px] py-[10px] rounded-lg border border-border-color cursor-pointer"
            >
              <img src={refresh} alt="" />
            </button>
            <button
              onClick={copySearch}
              className="px-[14px] py-[10px] rounded-lg border border-border-color cursor-pointer"
            >
              <img src={clipboard} alt="" />
            </button>
            <button className="px-[14px] py-[10px] rounded-lg border border-border-color cursor-pointer">
              <img src={menu} alt="" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
