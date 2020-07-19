import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


export default class SearchBar extends Component {

    render() {
        const { searchText, setSearchText } = this.props;
        return (
            <>
                <section className={styles.searchDiv}>
                    <input
                        className={styles.searchBar}
                        placeholder="Enter brand or size ..."
                        value={searchText}
                        onChange={setSearchText}
                    />
                </section>
            </>
        )
    }
}