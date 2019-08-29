import React, { useState } from 'react';
import Hello from './Hello';
import './style.css';

const App = (props) => {
  let [name, setName] = useState('React');
  return (
    <div>
      <Hello name={name} />
      <p>
        Start editing to see some magic happen :)
        </p>
    </div>
  );
}

export default App;