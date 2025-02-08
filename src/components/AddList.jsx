import List from './List.jsx'
import Error from './Error.jsx'
import Input from './Input.jsx';
import { useState } from 'react';
export function AddList(){ 
    const [listItem,setlistItem]=useState([]);
    const [text, settext]=useState('');
    const handleonKeyDown=(event)=>{
      settext(event.target.value) 
    }
    const  hanleOnClick=()=>{
      if(text.trim()){
        setlistItem([...listItem,text]);
        
      }
    }
     
    
    
    return(
        <>
        <Input handleonKeyDown={handleonKeyDown} hanleOnClick={hanleOnClick} ></Input>
        <Error  items={listItem} ></Error>
        <List  items={listItem}></List>               
        </>
    );
}