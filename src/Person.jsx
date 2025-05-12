import React from 'react';

const Person = ({id,name,title,salary,phone,email,animal}) => {
    return (
        <div className='p-30'>
             <h1 className='p-8 text-3xl text-center'>Personal Details</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Title</th>
        <th>Salary</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Favorite Animal</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>{title}</td>
        <td>{salary}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{animal}</td>
      </tr>
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Person;