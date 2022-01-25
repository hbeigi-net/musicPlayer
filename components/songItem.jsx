import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {selectByClick} from "../store/slice/Musics"
import styles from "../styles/songItem.module.css"
export default function songItem({music }) {
    const [song, setSong] = useState(music);
    const dispatch = useDispatch(); 
    const currentMusic = useSelector(state => state.ent.currentMusic.id);
    const clickHandler = (e , id)=>
    {
        dispatch(selectByClick({id}))
    }

    return (
      <>
            <li onClick={(e)=>clickHandler(e , song.id)}
             className={`songItem d-flex align-items-center w-100 mx-auto  shadow rounded my-3 overflow-hidden ${song.id == currentMusic?"activeSongItem" :""}`}>
                <img 
                    src = {song.banner}
                    alt='img'  
                    className='img-fluid col-5' />
                <div className="itemInfo ms-2">
                    <h5 className={`musicItemTitle m-0 ${styles.reder}`}>
                        {song.title}
                    </h5>
                    <p className='musicItemArtist text-dark pb-0 m-0 fs-6'>
                        {song.artist.slice(0,15)}
                    </p>
                </div>
            </li>
        </>
      );
}
