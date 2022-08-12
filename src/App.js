import './App.css';
import {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './components/IndexPage';
// import LinkedCountry from './components/LinkedCountry';
import Mycountry from './components/mycountry';
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
  render() {
    return (
      // <BrowserRouter>
        <div className="App">
          <Routes path='/countries-list' element={<IndexPage/>}>
            <Route index element = {<IndexPage />} />
            <Route path='/country' element = {<Mycountry/>} />
          </Routes>
        </div>
      //  </BrowserRouter>
      
    )
  }

}
export default App;
