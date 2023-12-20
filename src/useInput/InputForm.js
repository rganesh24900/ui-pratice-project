import React from 'react'
import useInput from './useInput';

function InputForm() {

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    const[firstName, bindFirstName, resetFirstName]=useInput('')
    const[lastName, bindLastName, resetLastName]=useInput('')
    const submitHandler = e=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Firstname</label>
                    <input {...bindFirstName} type='text'/>
                </div>
                <div>
                    <label>Lastname</label>
                    <input {...bindLastName} type='text'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default InputForm