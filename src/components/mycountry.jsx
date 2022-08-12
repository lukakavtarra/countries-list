import React from 'react'
import { useLocation } from 'react-router-dom';
import {IoReturnDownBack} from 'react-icons/io5'
import { Link } from 'react-router-dom';



export default function Mycountry() {

    const location = useLocation()
    const { countryChosed, sendCountries } = location.state
   
    console.log(sendCountries)
    console.log(countryChosed)
   
  

    // get pathnames last two characters
    const showCountry = countryChosed;
    console.log(showCountry)
    const chosenCountry = sendCountries.filter(country => {
        return country.cca2.includes(countryChosed)
      })
      console.log(chosenCountry)

      if(chosenCountry.length){
        const getNative = chosenCountry[0].name.nativeName[Object.keys(chosenCountry[0].name.nativeName)[0]]
        const getLanguages = chosenCountry[0].languages[Object.keys(chosenCountry[0].languages)[0]]
        const getCurrencies = chosenCountry[0].currencies[Object.keys(chosenCountry[0].currencies)[0]]
    return (
        <div className="chosen">
        <Link to={'/'}><IoReturnDownBack className='back' /> back</Link>
        <div className="chosenCountryDiv">
            <img className='chosenCountryImg' src={chosenCountry[0].flags.svg} alt="flag" />
            <div>
            <h1 className='chosenCountryName'>{chosenCountry[0].name.common}</h1>
                <div className="informatic__page">
                    <div className="">
                        <p className="chosenNativeName"><span>Native Name:</span> {getNative.official}</p>
                        <p className="chosenPopulation"><span>Population:</span>  {chosenCountry[0].population}</p>
                        <p className="chosenRegion"><span>Region:</span>  {chosenCountry[0].region}</p>
                        <p className="chosenSubRegion"><span>Sub Region:</span> {chosenCountry[0].population}</p>
                        <p className="chosenCapital"><span>Capital:</span>  {chosenCountry[0].capital[0]}</p>
                    </div>
                    <div className="">
                        <p className="domain"><span>Top Level Domain:</span> {chosenCountry[0].tld[0]}</p>
                        <p className="domain"><span>Currencies:</span>  {getCurrencies.name} {getCurrencies.symbol}</p>
                        <p className="domain"><span>Languages:</span>  {getLanguages}</p>
                    </div>
            </div>
            </div>
        </div>
        </div>
    )
}

}
