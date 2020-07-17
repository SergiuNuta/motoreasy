import React, { Component } from "react";
import Tyre from "./Tyre";



export default class TyreList extends Component {
    render() {
        console.log(this.props.tyreData)
        return(
            <>
                {/* {this.props.tyreData ?(
                <section>
                    {this.props.tyreData.map((tyre, index) => (
                             <Tyre tyreData={tyre} key={index} />                         
                         ))}      
                 </section>):(
                     <h1>Loading data...</h1>
                 )}  */}
            </>
        );
    }
}