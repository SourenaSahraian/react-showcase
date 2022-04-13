import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Form from './component/Form';
import Order from './component/Order';
import Home from './component/SessionManager';
import UserContetx from './component/UserContetx';


function App() {
  return (
    <div >
      <>
      <UserContetx>
        <Routes>
          <Route path='/signup' element ={<Form/>}></Route>
          <Route path='/orders' element ={<Order/>}></Route>
          <Route path='/*' element ={ <Home />}></Route>
        </Routes>

        </UserContetx>
      </>


    </div>
  );
}

export default App;
