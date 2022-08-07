import './App.css';
import {Component} from 'react';
import Countries from './components/Countries';
class App extends Component {
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
  const clickOnACountry = (item) => {
    console.log(item)
    const chosenCountry = countries.filter(country => {
      return country.cca2.includes(item)
    })
    console.log(chosenCountry);
  }
  const {countries, searchField} = this.state;
  const { onSearchChange, test } = this;
  // Get Filtered Countrys After 
  const filteredCountries = countries.filter(country => {
    return country.name.official.toLowerCase().includes(searchField)
  })
  return (
    <div className='App'>
      <Countries 
      sendCountries = {filteredCountries} 
      clickedCountry = {clickOnACountry}
      searchButton = {onSearchChange} />
    </div>
  );
}
}
export default App;
