import React from 'react'
import {filter} from '../redux/Actions';
import {useDispatch} from 'react-redux';
const Filter = () => {
    const dispatch=useDispatch();
    const handleFilter =(event) =>{
dispatch(filter(event.target.value))
    }; 
    return (
        <div>
 <input
        type='radio'
        id='All'
        name='filter'
        value='All'
        onChange={handleFilter}
      />
      <label htmlFor='All'>All</label>
      <input
        type='radio'
        id='done'
        name='filter'
        value='done'
        onChange={handleFilter}
      />
      <label htmlFor='done'>done</label>
      <input
        type='radio'
        id='undone'
        name='filter'
        value='undone'
        onChange={handleFilter}
      />
      <label htmlFor='undone'>undone</label>
        </div>
    )
}

export default Filter
