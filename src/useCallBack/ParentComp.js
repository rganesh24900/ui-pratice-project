import React,{useState,useCallback} from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'

function ParentComp() {
  const [salary, setSalary] = useState(20000);
  const [age, setAge] = useState(23);
  
  const incrementSal = useCallback(()=>{
    setSalary(salary+1000);
  },[salary])

  const incrementAge = useCallback(()=>{
    setAge(age+1);
  },[age])
  return (
    <div>
        <Title/>
        <Count text='Salary' count={salary}/>
        <Button handleClick = {incrementSal}>Increment salary</Button>
        <Count text='Age' count={age}/>
        <Button handleClick = {incrementAge}>Increment age</Button>
    </div>
  )
}

export default ParentComp