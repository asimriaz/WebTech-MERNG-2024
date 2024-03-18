import { useState } from 'react'

import './App.css'
import Head from './components/Head'
import Counter from './components/Counter'
import Calculator from './components/Calculator'


function Body() {
  return (
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  )
}




function App() {
  return (
    <>
      <Calculator />
      {/* 
      <Head msg="Welcome to React" num={5} arr={[1, 2]}/>
      <h1>Vite + React</h1>
      <div className="card">
      <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Body /> 
      */}
    </>
  )
}

export default App
