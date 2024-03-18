import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseList from './components/CourseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseList />
    </>
  )
}

export default App
