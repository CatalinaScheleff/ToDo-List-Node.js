import React from 'react';


const TodoList = () => {

    return ( 
    
      <div className="col-6">
    <label for="inputTask" class="form-label">Add a Task:</label>
    <input type="text" class="form-control" id="inputTask"/>
  
      <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
    </div>
    )
}

export default TodoList