import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import test from '../store/Test'
import styles from '../styles/Home.module.css'
test(); 

export default function Home() {
  return (
    <h1>hello world</h1>
  )
}

 function getMusic(){
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/1',
    headers: {
      'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

getMusic();