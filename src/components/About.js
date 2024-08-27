import React from 'react';
import UserClass from './UserClass';
import UserContext from "../uitls/UserContext"; 

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent Component Did Mount');
  }

  render() {
    // console.log('Parent render');
    return (
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">About</h1>

        <div className="text-center mb-4">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-semibold text-blue-600">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
          This is a multi-cuisine Restaurant
        </h2>

        <UserClass name="Pavan (class)" location="Hyderabad (class)" />

        <section className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Sweet and Simple</h2>
          <p className="text-gray-600">
            Our approach is all about being sweet and simple—offering a warm and inviting atmosphere with straightforward, delicious food that speaks for itself. We believe in keeping things uncomplicated to ensure a delightful dining experience for everyone.
          </p>
        </section>
      </div>
    );
  }
}

export default About;