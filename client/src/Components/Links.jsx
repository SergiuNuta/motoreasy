import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Links.module.scss"

export default class Links extends Component {
    render(){
        return(
            <>
            <Link to="/" className={styles.links}>MotorEasy</Link>
            </>
        )
    }
}
