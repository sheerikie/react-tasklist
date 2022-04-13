import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

export default function ListItems(props) {
    const items=props.items;
    const ListItems=items.map((item)=>{
        return <div className='list' key={item.key}>
            <p>
            <input type="text" id={item.key} defaultValue={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
            <span>
                <FontAwesomeIcon className='faicons' icon='trash' onClick={()=>props.deleteItem(item.key)}/>
            </span>
            </p>
        </div>
    })
  return (
    <div>
    <FlipMove duration={500} easing="ease-in-out ">
    {ListItems}
    </FlipMove>
    </div>
  )
}
