import React , { Component } from 'react';
import Loading from "./Component/Loading";
import Search from "./Component/Search";
import KittenList from "./Component/KittenList";
import './App.css';

class App extends Component {
  state = {
    kittens : [],
    searchField: "",
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true})

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({ kittens : data , loading: false}))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
      let { kittens , searchField , loading } = this.state;
      // Runs this while data is being fetched from news api
      if (loading) {
          return <Loading />
      }

      // Runs this when data is fetched
      else {
          const filteredKittens = kittens.filter(kitten =>{
            return kitten.username.toLowerCase().includes(searchField.toLowerCase());
          })

          return (
            <div>
              <header>
                  <h2 className="text-center m-3 font-weight-bolder">Kitten World</h2>
              </header>
              <Search onSearchChange = {this.onSearchChange} />
              <KittenList kittens={filteredKittens} className="kittens" />
            </div>
          )
      }
  }
}

export default App;
