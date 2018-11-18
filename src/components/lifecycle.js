import React, { Component } from 'react'

 class Lifecycle extends Component {
     // 1: Get Default State
     constructor(props) {
         super(props);
      
     // 2: Set Initial State
     this.state = {
         title:'What comes around',
         body:'Jonny Cash'
     }    
     }

     componentWillReceiveProps() {
         console.log('Before Recieving Props');
     }

     // 3:Before Component gets Created
     componentWillMount() {
         console.log('Before Component gets created');
        
     }
     componentWillUpdate() {
         console.log('Before Update');
     }

     componentDidUpdate() {
         console.log('After Update');
     }

     shouldComponentUpdate(nextProps,nextState) {
         if(nextState.title === 'something else') {
             return false
         }
            return true
         
     }

     // 4:Render JSX
  render() {
    return (
      <div>
        <h4>{this.state.title}</h4>
        <div>{this.state.body}</div>
        <div onClick={()=>this.setState({title:'something else'})}>Click to Change</div>
      </div>
    )
  }

    // 5:After Component is Mounted
    componentDidMount() {
        console.log('After Component gets Mounted');
        document.querySelector('h4').style.color = 'red';
    }

    componentWillUnmount() {
        console.log('Unmount');
    }
}


export default Lifecycle;