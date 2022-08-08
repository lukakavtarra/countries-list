import { Component } from 'react'
import {IoReturnDownBack} from 'react-icons/io5'

class Countries extends Component {
  render() {
    const {sendCountries, clickedCountry, searchButton} = this.props;
if(window.location.pathname == '/countries-list/'){
    console.log(sendCountries)
    return (
        <div className="">
       <input onChange={(event) => searchButton(event) } type="text" />

        <div className='countries__list' >

        {sendCountries.map((item) => {
          return (
            
              <div title={item.name.official} onClick={() => clickedCountry(item.cca2)} className='countries' key={item.cca2}>
              <a href={item.cca2}>
                <img title={item.name.official} className='flag' src={item.flags.svg} alt="flag" />
                <h1 title={item.name.official} className='name'>{item.name.official}</h1>
                <p title={item.name.official} className="population">Population: {item.population}</p>
                <p title={item.name.official} className="region">Region: {item.region}</p>
                <p title={item.name.official} className="capital">Capital: {item.capital}</p>
              </a>

              </div>
          )
        })}
        </div>
        </div>
    )
}else {
    const showCountry = window.location.pathname.slice(-2);
    console.log(showCountry)
    const chosenCountry = sendCountries.filter(country => {
        return country.cca2.includes(showCountry)
      })
      console.log(chosenCountry)

      if(chosenCountry.length){
        const getNative = chosenCountry[0].name.nativeName[Object.keys(chosenCountry[0].name.nativeName)[0]]
        const getLanguages = chosenCountry[0].languages[Object.keys(chosenCountry[0].languages)[0]]
        const getCurrencies = chosenCountry[0].currencies[Object.keys(chosenCountry[0].currencies)[0]]
    return (
        <div className="chosen">
        <a href="/"><IoReturnDownBack className='back' /> back</a>
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
  }
}

export default Countries