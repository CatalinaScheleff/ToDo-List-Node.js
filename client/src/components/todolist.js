import React from 'react';


const TodoList = () => {

    return ( 
    <div className='justify-content-center d-flex'>
      <div className="col-6">
      <h1 className='mt-5'>Add a Task</h1>
    <input type="text" className="form-control my-4"/>
    <h1 className='mt-5'> Your Tasks</h1>
      <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
    </div>
    </div>
    )
}

export default TodoList