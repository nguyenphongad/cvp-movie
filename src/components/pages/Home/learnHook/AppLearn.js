import React, { useState } from 'react'
import LearnHook from './LearnHook'

function AppLearn() {
    const LIST_TODOS = [
        {id :1, title : "noi dung 1"},
        {id :2, title : "noi dung 2"},
        {id :3, title : "noi dung 3"}
    ]
    const [todoList, setTodoList] = useState(LIST_TODOS);

    return (
        <div>
            AppLearn
            <LearnHook todos={todoList}/>
        </div>
    )
}

export default AppLearn