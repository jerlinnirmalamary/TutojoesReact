import React from 'react';
import PropTypes from 'prop-types';

export default function Student({name,age,isMArried}) {
  return (
    <div className='student'>
<table>
    <tbody>
    <tr>
        <th>Name</th>
        <td>{name}</td>
    </tr>

    <tr>
        <th>Age</th>
        <td>{age}</td>
    </tr>

    <tr>
        <th>ismarried</th>
        <td>{isMArried ? "Yes" : "No"}</td>
    </tr>
    </tbody>
</table>
    </div>
  )
};




Student.propTypes = {
    name: PropTypes.string,
    age:PropTypes.number,

  };


//   DefaultProps:

Student.defaultProps ={
    name: "No name",
    age:0,
    isMarried:false
}