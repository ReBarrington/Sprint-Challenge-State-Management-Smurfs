import React, { useState} from 'react';
import { newSmurf } from '../actions/actions';
import { connect } from 'react-redux';

const SmurfForm = props => {
    const [card, setCard] = useState({
        name: "",
        age: "",
        height: "",
    });
    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value })
    };

    const submitForm = e => {
        e.preventDefault();
        props.newSmurf(card);
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                />
            <label htmlFor="age">Age</label>
            <input 
                id="age"
                type="text"
                name="age"
                onChange={handleChanges}
                placeholder="age"
                />
            <label htmlFor="height">Height</label>
            <input 
                id="height"
                type="text"
                name="height"
                onChange={handleChanges}
                placeholder="height"
                />
            <button type="submit">Submit</button>
        </form>
    )
}


// getting state using connect (state is in store)
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
// getData is from action file and is placed in the position of mapDispatchToProps
export default connect(mapStateToProps, {newSmurf}) (SmurfForm);