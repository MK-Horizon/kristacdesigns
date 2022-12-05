import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Projects from '../components/Projects'
import ProfExp from '../components/ProfEx'
import { Skills } from '../components/Skills'




export default function Home() {
  return (
    <>
    <div class="card"><p/><p/><p/><p/><p/><p/></div>
      <ProfExp/>
      <Skills/>
      <Projects/>
    </>
  )
}
