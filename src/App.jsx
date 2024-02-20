import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { Videossect } from './components/videossect/videossect'
import { Easy } from './components/easyuse/easy'
import { Character } from './components/character/character'
import { Techchar } from './components/techcharacters/techcharracter'
import { Complect } from './components/complect/complect'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <>
<Header></Header>
<Main></Main>
<Videossect></Videossect>
<Easy></Easy>
<Character></Character>
<Techchar></Techchar>
<Complect></Complect>
<Footer></Footer>
    </>
  )
}

export default App
