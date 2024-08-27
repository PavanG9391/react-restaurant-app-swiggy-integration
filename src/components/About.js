import User from './User'
import UserClass from './UserClass';
import React from 'react';
import UserContext from "../uitls/UserContext";


class About extends React.Component{

    constructor(props){
        super(props)

       

        // console.log('Parent Constructor')
    }

   componentDidMount(){
    //console.log('Parent Component Did Mount')
   }
    render(){
        // console.log('Parent render')
        return(
            <div>
                <h1>About</h1>
                <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className='text-xl font-bold'>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is multi cuisine Restaurant</h2>
                <UserClass name={"pavan (class)"} location={"Hyderabad (class)"}/>
            </div>
        )
    }
}
export default About
