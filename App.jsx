import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Oc from './Oc'
import Products from "./Products";

function App() {
  return (
    <div>
      <h1>Product Store</h1>

      <Products />
    </div>
  );
}

export default App;