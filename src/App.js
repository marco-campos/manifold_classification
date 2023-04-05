import React from 'react';
import InputField from './components/InputField';

function App() {
  return (
    <div className="App">
      <h3>Type in a proper scheme bellow and denote a reverse direction with an apostrophe.</h3>
      <h3>For example, the torus should be typed as <a>aba'b'</a></h3>
      <InputField />
    </div>
  );
}

export default App;
