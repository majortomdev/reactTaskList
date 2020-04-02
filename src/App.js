import React, { Component } from 'react';
import Tasks from './components/Tasks';
 
import './App.css';

class App extends Component {

  state = {
    Tasks: [
    {
          id: 1,
          title: 'Complete Assignment',
          done: false 
      },
      {
        id: 2,
        title: 'Write Introduction Chapter',
        done: true 
    },
    {
        id: 3,
        title: 'Build UI for project',
        done: false 
    }
    ]
}

  render() {
     
    return (
      <div className="App">
        
        <Tasks tasks={this.state.Tasks}/>
      </div>
    )
  }
}

export default App;




// function App() {
//   return (
//     <div className="App">
      
//         <Tasks></Tasks>
     
      
//     </div>
//   );
// }
