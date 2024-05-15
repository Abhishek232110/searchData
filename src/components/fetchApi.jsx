import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchData from "./search";

const FetchApiData = () => {
  const result = useSelector((state) => state?.api?.users);
  const [filteredData, setFilteredData] = useState(result ? result : []);

  useEffect(() => {
    setFilteredData(result ? result : []);
  }, [result]);

  const onQueryChange = (s) => {
    console.log(s);
    const filterRes = result?.filter((item) =>
      item.show.name.toLowerCase().includes(s.toLowerCase())
    );
    console.log("filterRes", filterRes);
    if (filterRes) {
      setFilteredData(filterRes);
      if (filterRes.length == 0) {
        console.log("No results found");
      }
    }
  };
  return (
    <>
      <SearchData onQueryChange={onQueryChange} />
      <div className=" m-1 space-y-10 font-text  w-full flex flex-col justify-center items-center">
        {filteredData?.map((photo) => (
          <div
            key={photo.show.id}
            className="  rounded-lg flex-col flex items-center shadow-sm bg-zinc-200 p-4"
          >
            <img
              src={
                photo.show.image ? photo.show.image.medium : "placeholder-url"
              }
              alt={photo.show.name}
              className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
            />

            <div className=" py-2 cursor-pointer font-medium  ">
              <p className=" text-textColor  p-1">{photo.show.name}</p>
              <p className=" text-textColor  p-1">{photo.show.language}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchApiData;
