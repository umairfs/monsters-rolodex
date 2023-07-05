// import { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// Functional component for App
const App = () => {
  // set state value
  const [ searchField, setSearchField ] = useState('');
  const [ monsters, setMonsters ] = useState([]);
  console.log({searchField});

  // fetch monsters using useeffect
  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          setMonsters(users)
        }
      );
    }, 
    []
  )
  // on click of search button search event will be fired
  const onSearchEngine = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // filter monster
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  });

  return (
    <div className="App">
      <h1 className='app-title'>Monster Roldex</h1>
      <SearchBox onChangeHandler={onSearchEngine} placeholder = 'serach monsters' className= "monster-search-box" />
      <CardList monsters = { filteredMonsters }/>
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return { monsters: users }
//           },
//           () => {
//           }
//         )
//       }
//       );
//   }

//   onSearchEngine = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();


//     this.setState(() => {
//       return { searchField }
//     });
//   };

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchEngine } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });
    
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Roldex</h1>
//         {/* <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchEngine} /> */}
//         <SearchBox onChangeHandler={onSearchEngine} placeholder = 'serach monsters' className= "monster-search-box" />
//         <CardList monsters = { filteredMonsters }/>
//       </div>
//     );
//   }
// }

export default App;
