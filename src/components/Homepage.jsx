import { useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, Searchbar, ShowMore } from "./";
import { fuels, yearsOfProduction } from "../constants";
import { fetchCars } from "../utils";

const Homepage = () => {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter states

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      try {
        const result = await fetchCars({
          manufacturer: manufacturer || "",
          year: year || 2022,
          fuel: fuel || "",
          limit: limit || 10,
          model: model || "",
        });

        setAllCars(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, [fuel, limit, manufacturer, model, year]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <Searchbar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars?.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, i) => (
                <CarCard key={i} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <span>Loading...</span>
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
};

export default Homepage;
