
function Error({items}){ 
    return (
        <>
        {(items.length===0) ? <h1 className="text-4xl">list is empty.</h1>:null}

        </>
    );
}
export default Error;