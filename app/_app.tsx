
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
const { data: todos } = await supabase.from('todos').select()

function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    function getTodos() {

      if (todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((data) => (
        <li key={data}>{todos}</li>
      ))}
    </div>
  )
}
export default Page

