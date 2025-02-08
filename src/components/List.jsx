
function List(props){
    return(
        <>
        <ul>
        {props.items.map((item)=>{
          return  <li key={item.length} className="w-screen text-left text-6xl border-2  bg-orange-200 ">{item}</li> 
        })}
    
        </ul>
      
        
        
        </>
    );
}
export default List;                                                                                                                                                