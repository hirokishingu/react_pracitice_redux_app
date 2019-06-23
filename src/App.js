import React from 'react';

function App() {
  const greating = "Hello?";
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("value");}} />
    </React.Fragment>
  );
}

export default App;
