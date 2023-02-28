import React from 'react'
import PropTypes from 'prop-types'

const LearnHook = props => {
    const { todos, onTodoClick } = props;
    const returnListTodos = todos.map((todo) => {
        return (
            <li key={todo.id}>
                {todo.title}
            </li>
        )
    })

    return (
        <ul>
            hello
            {
                returnListTodos
            }
        </ul>
    )
}
LearnHook.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
}

LearnHook.defaultProps = {
    todos: [],
    onTodoClick: null
}

export default LearnHook