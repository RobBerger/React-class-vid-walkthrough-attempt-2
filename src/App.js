import logo from './logo.svg';
import './App.css';

function App() {

  let name = 'Robert';
  let dogs = ['Fido', 'Buffy', 'Rex'];

  let dogListItems = dogs.map(dog => {
    return (<li className="dog-name">{dog}</li>);
  })

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      {
        dogs.length == 0
          ? <p>No Dogs</p>
          :(<ul>
            { dogListItems }
            </ul>)
      }
    </div>
  );
}

export default App;
