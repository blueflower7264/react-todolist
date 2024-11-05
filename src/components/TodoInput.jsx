
export default function TodoInput(props) {
    const {handleAddNewTodo, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} placeholder="Enter todo.." type="text" 
            onChange={(e) => setTodoValue(e.target.value)} />
            <button onClick={() => {
                handleAddNewTodo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}