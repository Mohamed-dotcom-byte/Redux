import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {add_todo} from '../redux/Actions';
import {useDispatch} from 'react-redux'
const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const handleInput = (e) => {
      e.preventDefault();
      dispatch(add_todo(input));
      setInput('');
    };
  
    return (
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button variant='dark' type='submit' onClick={handleInput}>
          Add
        </Button>
      </div>
    );
  };

export default AddTodo;