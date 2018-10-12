import React from 'react';

import Form from './Form';
import NewTask from './NewTask';
import './App.css';

function App(props) {
  return (
    <div className="container">
          <Form />
          <NewTask />
    </div>
  );
}

export default App;