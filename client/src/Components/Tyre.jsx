import React, { Component } from 'react';
import styles from "./Tyre.module.scss"

export default class Tyres extends Component {

    render() {
        const tyreData = this.props.tyreData;
        // console.log(tyreData.tyres.size)
        return (
            <>
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
            </>
        )
    }
}