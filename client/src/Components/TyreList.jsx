import React, { Component } from "react";
import Tyre from "./Tyre";
import Table from 'react-bootstrap/Table';
import styles from "./Tyre.module.scss"



export default class TyreList extends Component {
    render() {
        return (
            <>
                {this.props.tyreData ? (
                    <Table striped bordered hover pagination="true" variant="dark" responsive size="sm" className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.columnSizeId}>ID</th>
                                <th className={styles.columnSizeName}>Brand</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        {this.props.tyreData.map((tyre, index) => (
                            <Tyre tyreData={tyre} key={index} />
                        ))}
                    </Table>) : (
                        <h1>Loading data...</h1>
                    )}
            </>
        );
    }
}