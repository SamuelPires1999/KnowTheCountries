import { useState, useEffect } from "react";
import Axios from "axios";
import CountryDialog from "../components/CountryDialog";

export default function IndexPage() {
  const [country, setCountry] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getCountryInfo() {
      const result = await Axios.get(`https://restcountries.eu/rest/v2/all`);
      setInfo(result.data);
    }
    getCountryInfo();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-10 mb-10">
        <input
          className="bg-blue-200 py-2 px-4 rounded-md mr-5"
          type="text"
          placeholder="Filter by name..."
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
      </div>
      <div className="flex max-w-screen flex-wrap">
        {info ? (
          info.map((country, index) => (
            <CountryDialog key={index} country={country} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
