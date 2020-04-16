import React, {useState} from 'react';
import './App.css';

function Todo({todo, index, completeTodo, removeTodo}) {
    return (
        <div className="todo">
            <div style={{ textDecoration: todo.isComplete ? 'line-through': ''}}>
                {todo.text}
            </div>
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    );
}

function TodoForm({addTodo}) {
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) {
            return;
        }

        addTodo(value);
        setValue('');
    };

    const [value, setValue] = useState('');
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
        </form>
    );
};


function App() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about react',
            isComplete: false
        },
        {
            text: 'Meet friend',
            isComplete: false
        },
        {
            text: 'Build really cool app',
            isComplete: false
        },
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text, isComplete: false}];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isComplete = true;
        setTodos(newTodos);
    };
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

export default App;