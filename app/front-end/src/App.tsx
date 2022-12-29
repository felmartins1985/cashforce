import ContextProvider from './context/ContextProvider';
import HomePage from './pages/Homepage';
import {Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ContextProvider>
  );
}

export default App;
