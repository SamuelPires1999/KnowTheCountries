export default function CountryDialog({ country }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        className="md:w-1/4 sm:w-screen p-3 shadow-lg hover:bg-gray-500 cursor-pointer rounded-lg m-1 transition duration-150 ease-in-out"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="flex items-center">
          <h1 className="font-bold text-gray-800">
            {country ? country.name : "Loading"}
            {country.cioc ? `(${country.cioc})` : null}
          </h1>
          <img
            className="w-10 h-7 border-black border-l-2 border-r-2 border-t-2 border-b-2 border-opacity-40 shadow-xl ml-10"
            src={country ? country.flag : "Loading"}
          />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl transition duration-500 ease-in-out">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-500 rounded-t">
                  <h3 className="text-2xl font-semibold text-gray-600">
                    {country ? country.name : null}
                    {country.cioc ? `(${country.cioc})` : null}
                  </h3>
                  <img
                    alt={`${country.name}'s flag`}
                    src={country.flag}
                    className="w-10 h-7"
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex justify-around">
                  <div>
                    <p className="text-gray-600 font-bold">
                      Population:{" "}
                      <span className="font-semibold">
                        {country.population}
                      </span>
                    </p>
                    <p className="text-gray-600 font-bold">
                      Domain:{" "}
                      <span className="font-semibold">
                        {country.topLevelDomain}
                      </span>
                    </p>
                    <p className="text-gray-600 font-bold">
                      Capital:{" "}
                      <span className="font-semibold">{country.capital}</span>
                    </p>
                    <p className="text-gray-600 font-bold">
                      Region:{" "}
                      <span className="font-semibold">{country.region}</span>
                    </p>
                  </div>
                  <div className="ml-16">
                    <p className="text-gray-600 font-bold">
                      Demonym:{" "}
                      <span className="font-semibold">{country.demonym}</span>
                    </p>
                    <p className="text-gray-600 font-bold">
                      Timezone:{" "}
                      <span className="font-semibold">
                        {country.timezones[0]}
                      </span>
                    </p>
                    <p className="text-gray-600 font-bold">
                      Currency:{" "}
                      <span className="font-semibold">
                        {country.currencies[0].name}
                      </span>
                    </p>
                    <p className="text-gray-600 font-bold">
                      Language:{" "}
                      <span className="font-semibold">
                        {country.languages[0].name}
                      </span>
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-gray-500 rounded-b">
                  <button
                    className="text-gray-600 bg-red-400 hover:bg-red-600 hover:text-white rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 transition duration-300 ease-in-out"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black transition duration-500 ease-out"></div>
        </>
      ) : null}
    </>
  );
}
