import { useState } from "react"

const User =(props)=>{
    const {name,location} =props
    const [count,setCount] =useState(0)
    const [count1,setCount1] = useState(1)
    return(
        <div className="user-card">
            <h1>Count1:{count}</h1>
            <h1>Count2:{count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact:@PavanAug24</h4>
        </div>
    )
}
export default User