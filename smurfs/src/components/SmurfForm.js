import React from 'react';
// import actions
import { connect } from 'react-redux';
import { newSmurf } from '../actions/actions';

const SmurfForm = props => {

    console.log(props, ' props to SmurfForm')

    const handleUpdateData = e => {
        e.preventDefault();
        props.newSmurf(textChanges);
    }

    const textChanges = e => {
        let name = e.target.value
        return name;
    }

    
    return (
        <div className='form'>
            <form>
                <label>
                    Name:
                    <input type='text' name='name' id='name' onChange={textChanges}/>
                </label>
                <label>
                    Age:
                    <input type='text' name='age' id='age' />
                </label>
                <label>
                    Height:
                    <input type='text' name='height' id='height' />
                </label>
                <button type="submit" onClick={handleUpdateData}>Submit</button>
            </form>
        </div>
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

