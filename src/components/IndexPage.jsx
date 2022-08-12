import React, { Component } from 'react'
import Countries from './Countries';
// import LinkedCountry from './LinkedCountry';
export default class indexPage extends Component {
    state = {
        countries: [],
        searchField: ''
      }
      componentDidMount() {
       
        fetch('https://restcountries.com/v3.1/all')
          .then((response) => response.json())
          .then((users) =>
            this.setState(
              () => {
                return { countries: users };
              },
              () => {
                // console.log(this.state)
              }
            )
          );
      }
    
      //Get Key's While Changing Input On Search
     onSearchChange = (event) => {
      const searchField = event.target.value.toLowerCase();
      this.setState(() => {return {searchField}})  
    }
    
    render() {
      let chooseCountry;
      const clickOnACountry = (item) => {
        // console.log(item)
        const chosenCountry = countries.filter(country => {
        chooseCountry = country.cca2.includes(item);
          return country.cca2.includes(item)
        })
        // console.log(chosenCountry);

      }
      const {countries, searchField} = this.state;
      const { onSearchChange } = this;
      // Get Filtered Countrys After 
      const filteredCountries = countries.filter(country => {
        return country.name.official.toLowerCase().includes(searchField)
      })
      return (
        <div className='App'>
          {/* <LinkedCountry element = {chooseCountry} /> */}
          <Countries 
          sendCountries = {filteredCountries} 
          clickedCountry = {clickOnACountry}
          searchButton = {onSearchChange} />
        </div>
      );
    }

}

