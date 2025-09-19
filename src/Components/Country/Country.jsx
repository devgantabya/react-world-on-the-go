import React from 'react';
import './country.css';

const Country = ({country, handleVisitedCountries}) => {

    const [visited, setVisited] = React.useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited ? 'visited-country' : ''}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} height='250px' width='100%' style={{objectFit: 'cover'}} />
            <h3><strong>Name:</strong> {country.name.common}</h3>
            <h3><strong>Capital:</strong> {country.capital.capital[0]}</h3>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;