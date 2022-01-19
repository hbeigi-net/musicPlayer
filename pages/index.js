import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import test from '../store/Test'
import styles from '../styles/Home.module.css'
import Player from "../components/Player"
test(); 

export default function Home() {
  return (
    <Player/>
  )
}

