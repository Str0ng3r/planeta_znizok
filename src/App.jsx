import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { Videossect } from './components/videossect/videossect'

function App() {

  return (
    <>
<Header></Header>
<Main></Main>
<Videossect></Videossect>
    </>
  )
}

export default App
