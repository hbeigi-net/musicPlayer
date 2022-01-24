import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
export default function songItem(props) {
    const [song, setSong] = useState(props.item);
  return (
      <>
        <li onClick={(e)=>props.clickHandler(e,props.itemId)} className='songItem d-flex align-items-center w-100 mx-auto  shadow rounded my-3 overflow-hidden'>
            <img 
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
                alt='img'  
                className='img-fluid col-5' />
            <div className="itemInfo ms-2">
                <h4 className='musicItemTitle m-0'>
                    musicTitle
                </h4>
                <p className='musicItemArtist pb-0 m-0'>
                    artist Name 
                </p>
            </div>
        </li>
      </>
  );
}
