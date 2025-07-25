const style = {
    backgroundColor: '#96d2bf',
    margin: '10px auto',
    padding: '10px',
    borderRadius: '8px'
}

export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled } = props;
    return (
        <div style={style}>
            <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
            <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
    )
}