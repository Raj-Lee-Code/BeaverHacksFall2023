import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homePage';
import AddClass from './Pages/AddClass';

  const App = () => {
  
    // Sets up routes
    let element = useRoutes([
      // {  // This section will be the initial loginPage when we set up auth rn the "/" leads to the homepage
      //   path: "/",
      //   element:<LoginPage setToken={setToken}/>
      // },
      {
        path: "/",
        element:<HomePage/>
      },

      {
        path: "/AddClass",
        element: <AddClass/>
      }

    ]);

  return (
      <div>
        {element}
      </div>
  );
  
}
export default App;
