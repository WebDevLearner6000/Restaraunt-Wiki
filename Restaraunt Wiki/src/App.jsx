import React, { useState, useEffect } from 'react';

import Header from "./Header.jsx"
import Home from './pages/Home.jsx';
import FiveStars from './pages/FiveStars.jsx';
import UnitedStates from './pages/UnitedStates.jsx';

function App() {
    let component
    switch (window.location.pathname) {
      case "/":
        component = <Home />
        break
      case "/fivestars":
        component = <FiveStars />
        break
      case "/unitedstates":
        component = <UnitedStates />
        break
    }

    return(
        <>
        <Header/>
        {component}
        </>
    )
}

export default App
