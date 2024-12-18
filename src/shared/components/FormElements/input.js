import React, {  useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';

import './input.css';


const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      }
    case 'TOUCH':
        return {
            ...state,
            isTouched: true
        }
    default: 
      return state;
  } 
}
const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    }); 

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
      onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = (event) => {
        dispatch( {
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        })
    };

    const isTouched = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    const element = props.element === 'input' ? (
    <input 
      id={props.id} 
      type={props.type} 
      placeholder={props.placeholder}
      onChange={changeHandler}
      onBlur={isTouched}
      value={inputState.value}
    />
    ) : (
    <textarea 
      id={props.id} 
      rows={props.rows || 3}
      placeholder={props.placeholder}
      onChange={changeHandler}
      onBlur={isTouched}
      value={inputState.value}
    /> ) 
    

    return <div className={`form-container`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && <p style={{color:'red', margin: '0px 0px 5px', padding: '0px', display:'flex', justifyContent:'right'}}>{props.errorText}</p>}
    </div>
}
export default Input;