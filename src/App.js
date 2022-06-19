import './App.css';
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from 'components/layout/Layout/Layout';
import Home from 'components/home/Home/Home';

function App() {
  return (
    <div>
      <Layout>
          <Routes>
            <Route path="/" element={ <Home/> } />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
