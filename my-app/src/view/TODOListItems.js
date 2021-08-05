import React from 'react';

class TODOListItems extends React.Component{
    // 編輯物件
    handleEditItem(){
        
    }

    // 刪除物件（向上傳遞→TODOList）
    handleDeleteItem(){
        if(this.props.onDeleteItem){
            this.props.onDeleteItem(this.props.itemId);
        }
    }

    // 將個別資料顯示於下方區域
    render(){
        return(
            <li className="list-item" key="{this.props.itemId}">
                <div className="li-title btn-group">標題：{this.props.data.title}</div>
                <div className="li-edit btn-group">
                    <div className="edit-btn" onClick={this.handleEditItem.bind(this)}>編輯</div>
                </div>
                <div className="li-delete btn-group">
                    <div className="del-btn" onClick={this.handleDeleteItem.bind(this)}>刪除</div>
                </div>
                <div className="li-content">內容：{this.props.data.description}</div>
            </li>
        );
    }
}

export default TODOListItems;