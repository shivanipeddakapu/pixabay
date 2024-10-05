import React from "react";
import {Link} from "react-router-dom";
import "./App.css"
export default class Part1 extends React.Component{
    render(){
        return(
            <>
            <nav>
                <ul>
                    <li>Pixabay</li>
                   <Link to="/sign"><li id="b1"><button>Register</button></li></Link>
                    <Link to="/log"><li id="b2"><button>Log-in</button></li></Link>
                </ul>
            </nav>
            </>
        )
    }
}
