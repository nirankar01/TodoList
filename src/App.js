import './App.css';
import react, { useState } from 'react';
import TodoList from './component/TodoList'
import ItemList from './component/ItemList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let AddList = (input) => {
    setListTodo([...listTodo, input]); //set the input text one by one into the listTodo variable 
  }

  //for deleting the todo list
  const deleteList = (key) => {
    let newTodoList = [...listTodo];//get all todoList into the new list
    newTodoList.splice(key, 1);//using splice  method to delete only one list at a time ,1->delete only one item
    //update the new list 
    setListTodo([...newTodoList])
  }

  return (
    <div className="main-container bg-gray-700 h-screen m-0">
      <div className="center-container ">
        <TodoList addList={AddList} />
        <h1 className="text-white  text-5xl ml-[500px] mt-10">TODO LISTS</h1>
        <hr />

        {listTodo.map((item, i) => {
          return (
            <ItemList key={i} items={item} index={i} deleteItem={deleteList} />
          )
        })}
      </div>
      {/* <div>{listTodo}</div> */}
    </div>
  );
}

export default App;
