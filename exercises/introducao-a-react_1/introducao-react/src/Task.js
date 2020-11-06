import React from 'react';

class Task extends React.Component {
    render() {
        const toDoArray = ['Estudar React', 'Estudar Props', 'Estudar PropTypes', 'Fazer Exercícios']
        return (
            <div>
            { toDoArray.map((item, index) => 
                <li key={index}>{item}</li>
            ) }
            </div>
        );
    };
};

  export default Task;