import { EditRounded } from '@mui/icons-material';
import React from 'react'
import './style.css'

const getLocalData = () => {
    const lists = localStorage.getItem('items');
    if(lists){
        return JSON.parse(lists);
    }
    else 
    {
        return [];
    }
}

const Todo = () => {

    const [inpData , setInpData] = React.useState('');
    const [items,setItems] = React.useState(getLocalData());
    const [isEdit,setIsEdit] = React.useState("");
    const [editIndex,setEditIndex] = React.useState("");
    const [toggle , setToggle] = React.useState(false);

    const addItem = () => {
        if(!inpData){
            alert("fill");
        }
        else{
            const myNewInputData = 
            {
                id: new Date().getTime().toString(),
                name:inpData
            };
            setItems([myNewInputData,...items]);
            setInpData('');
        }
    }
    const delItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }
    const editItem = (id,index) => {
        const editItem =  items.find((item) => item.id === id);
        setInpData(editItem.name);
        setIsEdit(id);
        setEditIndex(index);
        setToggle(true);


    }
    const edited = () => {

        //const newItems = [...items.filter((item) => item.id !== id),{id:id,name:inpData}];
        items[editIndex] = {isEdit:isEdit,name:inpData};
        setToggle(false);
        setInpData('');
       
    }
    const deleteAll = () => {
        setItems([]);
    }

    React.useEffect(() => {
        localStorage.setItem('items',JSON.stringify(items));
    },[items]);

  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                {/* <img src="./images/todo.svg" alt="logo" /> */}
                <figcaption>😉😉 Your Todo 😉😉</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" 
                placeholder="Add Todo 📝" 
                className="form-control" 
                value = {inpData}
                onChange = {(event) => setInpData(event.target.value)} 
                />
                {toggle ? 
                (<i className="fa fa-edit add-btn" onClick={()=> edited()}></i>) :
                 (<i className="fa fa-plus add-btn" onClick={()=> addItem()}></i>)}
                
            </div>
            <div className="showItems">
                {items.map((item,index) => {
                    return (
                        <div className="eachItem" key={index}>
                    <h3>{item.name}</h3>
                    <div className="todo-btn">
                        <i className="fa fa-edit add-btn" style={{ background:"none" }} onClick={() => editItem(item.id,index)}></i>
                        <i className="fa fa-trash-alt add-btn" style={{ background:"none" }} onClick={() => delItem(item.id)}></i>
                    </div>
                </div>
                    );
                })}
            </div>
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=> deleteAll()}>
                    <span>Checklist</span>
                </button>

            </div>
        </div>
    </div>
    </>
  )
}

export default Todo