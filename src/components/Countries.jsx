import { Component } from 'react'
import { Link } from 'react-router-dom';


// import LinkedCountry from './LinkedCountry';
class Countries extends Component {
  render() {
    const {sendCountries, clickedCountry, searchButton} = this.props;
  
    return (
        <div className="">
       <input onChange={(event) => searchButton(event) } type="text" />

        <div className='countries__list' >

        {sendCountries.map((item) => {
          return (
              <div title={item.name.official} onClick={() => clickedCountry(item.cca2)} className='countries' key={item.cca2}>
              <Link to={"/country"} state={{countryChosed: item.cca2, sendCountries:sendCountries}}>
                <img title={item.name.official} className='flag' src={item.flags.svg} alt="flag" />
                <h1 title={item.name.official} className='name'>{item.name.official}</h1>
                <p title={item.name.official} className="population">Population: {item.population}</p>
                <p title={item.name.official} className="region">Region: {item.region}</p>
                <p title={item.name.official} className="capital">Capital: {item.capital}</p>
              </Link>

              </div>
          )
        })}
        </div>
        </div>
    )
}

  }


export default Countries