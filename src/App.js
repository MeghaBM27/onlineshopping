import React from 'react'
import Navbar from './Manju/navbar';

// const OnlineNav =React.lazy(()=>import('../src/Megha/navbar/nav.js') )
// const Navbar=React.lazy(()=> import('../src/Manju/navbar.js'))


function App() {
  // const path=[
  //   {path:'/meghanav', element:<OnlineNav/>},
  //   {path:'/manju', element: <Navbar/> }

  //   ]
    
  return (
    <div className="App">
    <Navbar/>
   

         
    </div>
  );
}

export default App;
