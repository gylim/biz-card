import React from "react";
import fb from './images/fb-small.png';
import gh from './images/gh-small.png';
import tw from './images/tw-small.png';
import ig from './images/ig-small.png';

export default function Footer() {
    return(
        <footer>
            <img className="tw" src={tw} onClick={()=> window.open("https://twitter.com/bgylim", "_blank")} />
            <img className="fb" src={fb} />
            <img className="ig" src={ig} />
            <img className="gh" src={gh} onClick={()=> window.open("https://github.com/gylim", "_blank")} />
        </footer>
    )
}