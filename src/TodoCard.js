import React from 'react'

const buttonStyle = {
    backgroundColor: '#61DAFB',
    color: 'white',
    fontSize: '14px',
    borderRadius: '5px',
    margin: '10px 5px',
    curson: 'pointer'
}

const TodoCard = (props) => {

    const { title, clickToRemove, index } = props
    return (
        <div>
            <li style={{ backgroundColor: 'green' }}>{title}</li>
            <button style ={ buttonStyle } onClick={() => {clickToRemove(index)}}>Remove</button>
        </div>
    )
}

export default TodoCard

