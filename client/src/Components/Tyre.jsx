import React, { Component } from 'react';
import styles from "./Tyre.module.scss"

export default class Tyres extends Component {

    render() {
        const tyreData = this.props.tyreData;
        console.log(tyreData.tyres.size)
        return (
            <>
                {/* <Table striped bordered hover pagination="true" variant="dark" responsive size="sm" className={styles.table}> */}
                    {/* <thead>
                        <tr>
                            <th className={styles.columnSizeId}>ID</th>
                            <th className={styles.columnSizeName}>Brand</th>
                            <th>Size</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>{tyreData._id}</td>
                            <td>{tyreData.name}</td>
                            {Object.values(tyreData.tyres.size).map((value, index) => {
                                return (
                                    <td className={styles.sizeColumn} key={index}>{value}</td>
                                )

                            })}
                        </tr>
                    </tbody>
                {/* </Table> */}
            </>
        )
    }
}