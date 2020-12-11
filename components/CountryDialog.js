export default function CountryDialog({ country }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        className="w-1/3 p-1 shadow-md hover:bg-gray-500 cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="flex items-center">
          <h1 className="font-bold text-gray-800">
            {country ? country.name : "Loading"}
          </h1>
          <img
            className="w-10 h-7 border-black border-l-2 border-r-2 border-t-2 border-b-2 border-opacity-40 shadow-xl ml-10"
            src={country ? country.flag : "Loading"}
          />
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold text-gray-600">
                    {country ? country.name : null}
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
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
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
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
