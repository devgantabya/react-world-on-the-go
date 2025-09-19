import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState(0);

    const handleVisitedCountries = () => {
        visitedCountries === 250 ? setVisitedCountries(0) : setVisitedCountries(visitedCountries + 1);   
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (

        <div>
            <h2>Total Countries: {countries.length}</h2>
            <h3>Number of Visited Countries: {visitedCountries}</h3>
            <div className="countries">
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;