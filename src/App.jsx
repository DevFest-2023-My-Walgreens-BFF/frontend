import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Search from './pages/Search';
import Detail from './pages/Detail';
import Main from './pages/main/Main';

import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import CompareBox from './components/common/CompareBox';

function App() {
  const [isToken, setIsToken] = useState('');
  const [userImage, setUserImage] = useState('');

  return (
    <>
      <Header
        istoken={isToken}
        setistoken={setIsToken}
        userimage={userImage}
        setuserimage={setUserImage}
      />
      <Routes>
        
        <Route
          exact
          path='/search'
          element={
            <Layout>
              <Search />
              <CompareBox />
            </Layout>
          }
        />
        <Route exact path='/' element={<Main />} />
        <Route
          path='/detail/:id'
          element={
            <Layout>
              <Detail />
              <CompareBox />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
