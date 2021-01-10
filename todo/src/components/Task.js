import React , {useState}from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {REMOVE, done, edit} from '../redux/Actions';

const Task = ({ id, title, isDone }) => {
    const dispatch = useDispatch();
    const [formInput,setFormInput]= useState(false);
    const [input,setInput]=useState('');
    const handleChange = (e) => {
      e.preventDefault();
      setFormInput(false);
      dispatch(edit(id, input));
      setInput('');
    };
  
 
  return (
    <div className='task'>
      <p      style={{
          gridArea: "task",
          textDecoration: isDone ? "line-through  red" : "none",
          textAlign : "center",
        }}>
          {title} 
          </p>
      {formInput ? (
        <span>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button variant='dark' onClick={handleChange}>
            Change
          </Button>
        </span>
      ) : (
        <Button variant='primary' onClick={() => setFormInput(true)}>
          EDIT
        </Button>
      )}
      
      {isDone ? (
        <Button variant='success' onClick={() => dispatch(done(id))}>
          UNDONE
        </Button>
      ) : (
        <Button variant='warning' className='btnd' onClick={() => dispatch(done(id))}>
          DONE
        </Button>
      )}
      <Button variant='danger' onClick={()=>{dispatch({type:'REMOVE', payload: id})}}>REMOVE</Button>
    </div>
  );
};

export default Task;
