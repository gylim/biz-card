import React from 'react';
import pfp from './images/pfp.png'

export default function Info() {
    return(
        <info className='info'>
            <img className='profile-pic' src={pfp} />
            <h1 className='info-name'>Benjamin Lim</h1>
            <h3 className='info-job'>Product Owner</h3>
            <a href='http://nostraightpath.com' className='info-web' target='_blank'>nostraightpath.com</a>
            <div className='buttons'>
                <button className='email' onClick={()=> window.open("mailto:gylim.benjamin@gmail.com", "_blank")}>Email</button>
                <button className='linkedin' onClick={()=> window.open("https://www.linkedin.com/in/blimgy", "_blank")}>LinkedIn</button>
            </div>
        </info>
    )
}