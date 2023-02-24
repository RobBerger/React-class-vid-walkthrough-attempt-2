import logo from './logo.svg';
import './App.css';

function App() {

  let name = 'Robert';
  let dogs = ['Fido', 'Buffy', 'Rex'];

  let dogListItems = dogs.map(dog => (<li>{dog}</li>));

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <ul>
        { dogListItems }
      </ul>
    </div>
  );
}

export default App;
