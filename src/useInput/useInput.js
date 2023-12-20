import {useState}from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const resetForm = ()=>{
        setValue(initialValue)
    }
    const bind = {
        value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }
  return [value,bind,resetForm]
}

export default useInput