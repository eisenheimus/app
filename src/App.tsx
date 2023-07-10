import React from 'react';
import { Home } from './components/home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/login';
import PrivateRoute from './utils/privateRoutes';
import { Register } from './components/auth/register';
import { AuthRootComponent } from './components/auth/auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />} > 
          <Route path='/' element={<Home />} />
          <Route path='/qwe' element={<h1>qwe page</h1>} />
        </Route>

        {
          ['/login', '/register'].map( i=> <Route path={i} element={<AuthRootComponent/>} />)
        }
      </Routes>
     
    </div>
  );
}

export default App;
