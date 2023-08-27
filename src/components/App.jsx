import React from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery'; 
import About from './About/About'; 
import Contact from './Contact/Contact'; 
import NotFound from './NotFound/NotFound';
import Web from './Web/Web';
import Mobile from './Mobile/Mobile';

import { createHashRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  let routers = createHashRouter([
    {path: '/' ,
      element: <Layout/> ,
      children: [
        { index:true , element: <Home/> },
        { path: 'gallery' , element: <Gallery/> ,
        children:[
          {index:true , element: <Web/>},
          { path: 'mobile' , element: <Mobile/>}
        ]},
        { path: 'about' , element: <About/> },
        { path: 'contact' , element: <Contact/> },
        { path: '*' , element: <NotFound/> }
      ]}
  ]);

  return <RouterProvider router={routers} />;
}