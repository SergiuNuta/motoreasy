import React, { Component, useMemo } from 'react';
import { useTable } from 'react-table';
// import 'react-table/react-table.css'
import Table from 'react-bootstrap/Table';


export default class Tyres extends Component {

    render() {
        const tyreData = this.props.tyreData;
        console.log(tyreData.tyres.size)
        return (
            <>
                <Table striped bordered hover pagination variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tyreData._id}</td>
                            <td>{tyreData.name}</td>
                            <td>{Object.values(tyreData.tyres.size).map(value => {
                                return (
                                    <tr>
                                        <td>{value}</td>
                                    </tr>)

                            })}</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}