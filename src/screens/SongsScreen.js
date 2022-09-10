import React, { useEffect, useState } from "react";
import axios from "axios";

const SongsScreen = () => {
  const [artistData, setArtistData] = useState(null);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    axios
      .get("https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay")
      .then((res) => setArtistData(res.data.artists[0]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(artistData.strArtist);

  return (
    <div className="bg-gray-100 h-screen flex justify-center">
      <div className="w-full flex justify-center h-24 border-b-2 mx-24">
        <h1 className="py-10 font-semibold">Songs List</h1>
      </div>
      <div>
        <h1>
          {/* {artistData.map((data) => (
            <h1>{data.strArtist}</h1>
          ))} */}
        </h1>
      </div>
    </div>
  );
};

export default SongsScreen;
