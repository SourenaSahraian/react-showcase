import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import Form from './component/Form';
import MovieJs from './component/MovieJs';
import Movies from './component/Movies';
import Order from './component/Order';
import Home from './component/SessionManager';
import UserContetx from './component/UserContetx';



function App() {
  const queryClient = new QueryClient()
  return (
    <div >
      <>
      <QueryClientProvider client={queryClient}>
      <UserContetx>

        <Routes>
          <Route path='/movie' element ={<MovieJs/>}></Route>
          <Route path='/signup' element ={<Form/>}></Route>
          <Route path='/orders' element ={<Order/>}></Route>
          <Route path='/*' element ={ <Home />}></Route>
        </Routes>

        </UserContetx>
        </QueryClientProvider>
      </>


    </div>
  );
}

export default App;
