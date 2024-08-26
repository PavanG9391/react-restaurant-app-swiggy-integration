import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        userInfo:{
            name:"Dummy",
            location:'default'
        }
    }
    // console.log('child construtor')
  }

  async componentDidMount(){
    // console.log('Parent Component Did Mount')

    const response = await fetch("https://api.github.com/users/PavanGundabattula")
    const json = await response.json()
   this.setState({
    userInfo:json,
   })
}
  render() {
    // console.log('child render')
    const { name, location } = this.state.userInfo;
    return (
       
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:@PavanAug24</h4>
      </div>
    );
  }
}
export default UserClass;
