import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTitle } from "../actions";

//import { initialState, titleReducer } from "../reducers/titleReducer";
// actions -
// TOGGLE_EDITING
// UPDATE_TITLE

const Title = props => {
  const [newTitleText, setNewTitleText] = useState();
  const [editing, setEditing] = useState(false);

  // useReducer - takes in a reducer, and an initialState obj
  // returns - a state obj, and the dispatch fn
  //const [state, dispatch] = useReducer(titleReducer, initialState);
  //console.log(state);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div >
      {!editing ? (
        <h1>
          {props.titleOnProps}{" "}
          <i  className="far fa-edit" onClick={() => setEditing(true)} />
        </h1>
      ) : (
        <div>
          <input className="title-input"
            
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              // dispatch({ type: "UPDATE_TITLE", payload: newTitleText })
              //debugger;
              props.updateTitle(newTitleText);
              setEditing(false);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    titleOnProps: state.title
  };
};


export default connect(
  mapStateToProps,
  { updateTitle } // {updateTitle: updateTitle}
)(Title);
