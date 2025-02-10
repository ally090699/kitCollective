import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <div className="foottop">
                <div className="footleft">
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <br />
                    </ul>
                </div>
                <div className="footright">
                    <ul>
                    <li className="name">Allison So</li>
                    <li>Ontario, Canada</li>
                    <li>ally090699@hotmail.com</li>
                    <li>
                        <a
                        className="icon-link"
                        href="https://www.linkedin.com/in/allxnso/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Kit Collective. All rights reserved.</p>
            </div>
        </footer>
    );
}