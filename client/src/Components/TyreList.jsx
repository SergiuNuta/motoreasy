import React, { Component } from "react";
import Tyre from "./Tyre";
import Table from 'react-bootstrap/Table';
import styles from "./Tyre.module.scss"

export default class TyreList extends Component {
    render() {
        const { currentPosts } = this.props;
        return (
            <>
                {currentPosts ? (
                    <Table striped bordered hover pagination="true" variant="dark" responsive size="sm" className={styles.table} pagesize="3">
                        <thead>
                            <tr>
                                <th className={styles.columnSizeId}>ID</th>
                                <th className={styles.columnSizeName}>Brand</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        {currentPosts.map((tyre, index) => (
                            <Tyre tyreData={tyre} key={index} />
                        ))}
                    </Table>) : (
                        <h1>Loading data...</h1>
                    )}
            </>
        );
    }
}