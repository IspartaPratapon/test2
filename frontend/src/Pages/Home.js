import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      members: []
    }
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData(){
    fetch('http://localhost:3001/get-team-members')
      .then((response) => {return response.json() })
      .then((data) => {
          this.setState({ members: data.listOfMembers })
          console.log(data.listOfMembers)
      })
  }

  render() {
    this.fetchData()
    return (
      <div>
        Backend Team Members
        <ul> 
          {this.state.members.map((member) => {
            return <li key={member.studno}>{member.studno} {member.name}</li>
          })} 
        </ul>
      </div>
    );
  }
}

export default Home;
