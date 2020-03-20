import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import actions
import { connect } from 'react-redux';
import { getData, newSmurf } from '../actions/actions';

const SmurfList = props => {

    console.log(props, ' is props in SmurfList')

    useEffect(() => {
        props.getData();
    }, [])
    
    return (
        // <p>render map through props.smurfs here</p>
        props.smurfs.map(smurf => {
            return (
                <div className="smurfCard">
                    <h3>{smurf.name}</h3>
                    <h5>Age: {smurf.age}</h5>
                    <h5>Height: {smurf.height}</h5>
                </div>
            )
        })
    )   
}

// getting state using connect (state is in store)
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
// getData is from action file and is placed in the position of mapDispatchToProps
export default connect(mapStateToProps, {getData, newSmurf}) (SmurfList);

