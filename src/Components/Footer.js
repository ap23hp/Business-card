import React from "react"
import TwitterIcon from "../Icons/twitter.png";
import FacebookIcon from "../Icons/fb.png";
import InstaIcon from "../Icons/insta.png";
import GithubIcon from "../Icons/gh.png";

export default function Footer() {
    return (
        <footer className="imgicon">
          <img src= {TwitterIcon}/>
          <img src= {FacebookIcon}/>
          <img src= {InstaIcon}/>
          <img src= {GithubIcon}/>
        </footer>
    )
}