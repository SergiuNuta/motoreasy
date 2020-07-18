import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


export default class SearchBar extends Component {
  
    render() {
        return(
            <>
            <section className={styles.searchDiv}>
            <input 
                className={styles.searchBar}
                placeholder="Enter name... or size"
                value={this.props.searchText}
                onChange={this.props.setSearchText}
            />
            </section>
            <section className={styles.maxResultsInput}>
                <input type="number" id="maxResults" className={styles.maxInput} placeholder="max results" />
            </section>
            </>
        )
    }
}