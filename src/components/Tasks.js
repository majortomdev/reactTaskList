import React, { Component } from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';


class Tasks extends Component {


    render() {
         
        return this.props.tasks.map((task) => (
            <TaskItem key={task.id} task={task}/>
        ));
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;






 
// function Tasks() {
//   const [Task, DoTask] = useState ({
//       tasks: [
//           {
//               id: 1,
//               title: 'Complete Assignment',
//               completed: false 
//           },
//           {
//             id: 2,
//             title: 'Write Introduction Chapter',
//             completed: true 
//         },
//         {
//             id: 3,
//             title: 'Build UI for project',
//             completed: false 
//         },
//       ]
//   })

//   console.log(this.useState.tasks)  
//   return (
//     <div>
//         <h1>Tasks</h1>
//     </div>
//   );
// }


