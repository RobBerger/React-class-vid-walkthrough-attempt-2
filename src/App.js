import React from 'react';
import Dog from './Dog';
import dogs from './dog-data';

function App() {

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dogs</h1>
      {
        dogs.map(dog => (<Dog data={dog} />))
      }
    </div>
  );
}

export default App;
