const Todo = () => {
    return (
        <>
         <p onClick={() => setShowInputField(true)}>{showInputField ? <><input type="text" value={value} /></>:item.name}</p>
        </>
    )
}

export default Todo