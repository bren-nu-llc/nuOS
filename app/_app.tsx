
import { useState, useEffect } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import { supabase } from '@/utils/supabase'

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
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  )
}
export default Page

