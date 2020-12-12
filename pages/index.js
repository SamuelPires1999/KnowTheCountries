import { useState, useEffect } from "react";
import Axios from "axios";
import CountryDialog from "../components/CountryDialog";

export default function IndexPage() {
  const [countryFilter, setCountryFilter] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getCountryInfo() {
      const result = await Axios.get(
        `https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;population;topLevelDomain;cioc;flag;region;demonym;languages;timezones`
      );
      setInfo(result.data);
    }
    getCountryInfo();
  }, []);

  useEffect(() => {
    console.log("countries fetched: ", info.length);
  }, [info]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-10 mb-10">
        <input
          className="bg-gray-500 py-2 px-4 rounded-md mr-5"
          type="text"
          placeholder="Filter by name..."
          value={countryFilter}
          onChange={(event) => {
            setCountryFilter(event.target.value);
          }}
        />
      </div>
      <div className="custom__scroll flex  max-h-screen max-w-screen flex-wrap justify-center transition duration-150 ease-in-out overflow-y-auto">
        {info ? (
          info
            .filter((country) => {
              return country.name
                .toLowerCase()
                .includes(countryFilter.toLowerCase());
            })
            .map((country, index) => (
              <CountryDialog key={index} country={country} />
            ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
