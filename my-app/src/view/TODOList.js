import React from 'react';
import TODOListItems from './TODOListItems';

class TODOList extends React.Component{
    render(){
        return(
            <div className="list-area">
                <ul className="list-group">
                    {this.props.lists.map((data) => 
                        <TODOListItems data={data} key={data.id}/>
                    )}   
                </ul>
            </div>
        );
    }
}

export default TODOList;