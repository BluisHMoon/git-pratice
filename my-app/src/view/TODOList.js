import React from 'react';
import TODOListItems from './TODOListItems';

class TODOList extends React.Component{
    // 編輯物件（向上傳遞→App）
    handleEditItem(itemId){
        if(this.props.onEditItem){
            this.props.onEditItem(itemId);
        }
    }

    // 刪除物件（向上傳遞→App）
    handleDeleteItem(itemId){
        if(this.props.onDeleteItem){
            this.props.onDeleteItem(itemId);
        }
    }

    // 將陣列資料依序傳遞給TODOListItems印出
    render(){
        return(
            <div className="list-area">
                <ul className="list-group">
                    {this.props.lists.map((data, i) => 
                        <TODOListItems data={data} key={i} itemId={i} onDeleteItem={this.handleDeleteItem.bind(this)} onEditItem={this.handleEditItem.bind(this)} />
                    )}   
                </ul>
            </div>
        );
    }
}

export default TODOList;