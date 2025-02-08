const Input=({handleonKeyDown,hanleOnClick})=>{
    return(
    <>
    <div className="flex justify-evenly">
    <input  onChange={handleonKeyDown} className="border-2 pl-2" type="text"  placeholder="Enter todo list"/>
    <button onClick={hanleOnClick} className="bg-teal-400 w-20 rounded hover:bg-green-400 ">Add</button>
    </div>
   
    </>
    );
}
export default Input;
