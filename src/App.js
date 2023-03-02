// import { Router,Route } from 'express';
// import React, { Suspense } from 'react';
// import Navbar from './Manju/navbar';
import React from 'react';
import OnlineShopping from '../src/Megha/navbar/nav.js';

// const OnlineNav =React.lazy(()=>import('../src/Megha/navbar/nav')) 
// import OnlineNav from './Megha/navbar/nav'; 



function App() {
//  const router=[
//     {path:'/megha', element:<OnlineNav/>}
//   ]



  return (
    <div className="App">
      {/* <Suspense> */}
   {/* <Router> */}
   {/* <Route path="/megha" element={<OnlineNav/>} /> */}
   {/* <Route  path="megha"element={<React.Suspense fallback={<>...</>}> <OnlineNav />  </React.Suspense>}/>
   
   </Router> */}
   {/* </Suspense> */}
  <OnlineShopping/>
    {/* <Navbar /> */}
  
    </div>
  );
}

export default App;
