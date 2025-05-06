import React from 'react'
import { MdDelete } from "react-icons/md";

const ItemList = (props) => {
    return (
        <div className="list-item border w-[30%]  p-3 rounded-lg bg-green-300 list-none
         text-2xl m-10 ml-[35%]">
            <li className="flex items-center justify-between  ">
                {props.items}
                <MdDelete className="text-red-500 w-[40px] hover:w-[60px] h-[60px]"
                    onClick={e => {
                        props.deleteItem(props.index)
                    }}
                />
            </li>
        </div>
    )
}

export default ItemList
