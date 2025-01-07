import React,{useState} from 'react'

function Home() {
    const [num,setNum] = useState(0);
    const increment = ()=>{
        setNum(num+1)
        console.log("Number is Increased by 1 ",num+1)
    }
    const decrement = ()=>{
        if(num==0){
            console.log("Number Cannot be Decrease")
        }
        else{
            setNum(num-1)
            console.log("Number is Decreased by 1 ",num-1)
        }

    }
  return (
    <>
    <div className='text-yellow-500 text-5xl m-5 p-3 bg-gray-50 rounded-lg'>The Value is {num}</div>
    <button className='text-red-700  border-white m-5 p-2 rounded-lg bg-gray-50 ' onClick={increment}>Increment</button>
    <button className='text-blue-700 border-white m-5 p-2 rounded-lg bg-gray-50' onClick={decrement}>Decrement</button>
    </>
  )
}

export default Home