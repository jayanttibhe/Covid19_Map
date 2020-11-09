import React, { useState, useEffect } from "react";
import LoadCountriesTask from "../tasks/LoadCountriesTask";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import Loading from "./Loading";
import legendItems from "../entities/LegendItems";

const Covid19 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
