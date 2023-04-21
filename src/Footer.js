import React from "react"

const Footer = (props) => {

    return (
        <div>
            <ul className="footerlinklist">
                <li>
                <a className="footerlink" href="#links">{props.text}</a>
                </li>
            </ul>  
        </div>
    );
}

export default Footer;
