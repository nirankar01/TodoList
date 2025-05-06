import React, { useState } from 'react'

const TodoList = (props) => {
  const [input, setInput] = useState('');

  return (
    <div className="flex  justify-center items-center ">
      <div className="inputfield mt-10 space-x-2 items-center ">
        <input
          type="text"
          value={input}
          className="p-1 text-2xl border-none rounded-lg"
          placeholder="enter here"
          onChange={e => {
            setInput(e.target.value)
          }}
        />
      </div>
      <button className="w-12 h-10 text-white items-center justify-center text-2xl  flex bg-blue-800 p-3 rounded-3xl ml-2 mt-8"
        onClick={() => {
          props.addList(input)  // call addList function and pass the input text
          setInput("")   //after adding input field occurs empty
        }}>+</button>
      {/* <h1 className="bg-red-600">{input}</h1> */}
    </div>
  )
}

export default TodoList
