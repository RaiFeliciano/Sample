import { useEffect, useState } from 'react'
import type { Todo } from './type'
function Check() {
    const [todos, setTodos] = useState <Todo[] | null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const res =  await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()
            setTodos(data)
            setLoading(false)
        }
        fetchData()
    }, [])
  
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
        
        <ul>
            {todos && todos.length > 0 ?  
            todos?.map( todo => {
                return (
                    <li key={todo.id}>{todo.title}</li>
                ) }) 
                : <h1>No todos yet</h1>}
        </ul>
        </>
    )
}

export default Check