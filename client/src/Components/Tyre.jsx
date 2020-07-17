import React, { Component, useMemo } from 'react';
import { useTable } from 'react-table';
// import 'react-table/react-table.css'
// import Table from 'react-bootstrap/Table';

export default class Tyres extends Component {

    render() {
        const tyreData = this.props.tyreData;

        const columns = useMemo(
            () => [
                {
                    Header: 'ID',
                    accessor: '_id',
                    filterable: true,
                },
                {
                    Header: 'Name',
                    accessor: 'name',
                    filterable: true,
                }
                // {
                //     Header: 'Tyres',
                //     accessor: 'tyres',
                //     filterable: true,
                // }
            ]
        );

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({ columns, tyreData })

        console.log(tyreData)
        return (
            <>

                <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: 'solid 3px red',
                                            background: 'aliceblue',
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                    background: 'papayawhip',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>



                {/* <h2>Name: {tyreData.name}</h2> */}
                {/* <h3>{tyreDataChild}</h3> */}
                {/* <h4>ID: {tyreData._id}</h4> */}


                {/* <Table striped bordered hover>
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
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </Table> */}
            </>
        )
    }
}