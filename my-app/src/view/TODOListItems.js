import React from 'react';

class TODOListItems extends React.Component{
    render(){
        console.log(this.props);
        return(
            <li className="list-item" key="{this.props.data.id}">
                <div className="li-title btn-group">標題：{this.props.data.title}</div>
                <div className="li-edit btn-group">編輯</div>
                <div className="li-delete btn-group">刪除</div>
                <div className="li-content">內容：{this.props.data.description}</div>
            </li>
        );
    }
}

export default TODOListItems;