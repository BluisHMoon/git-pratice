import React, { PureComponent } from 'react';

class TODOListItems extends PureComponent {
    // 刪除物件（向上傳遞→TODOList）
    handleDeleteItem = () => {
        if (this.props.onDeleteItem) {
            this.props.onDeleteItem(this.props.itemId);
        }
    }

    // 將個別資料顯示於下方區域
    render() {
        return (
            <li className="list-item" key="{this.props.itemId}">
                <div className="list-btn-area">
                    <div className="li-edit btn-group">
                        <div className="edit-btn">編輯</div>
                    </div>
                    <div className="li-delete btn-group">
                        <div className="del-btn" onClick={this.handleDeleteItem}>刪除</div>
                    </div>
                </div>
                <div className="list-content-area">
                    <div className="li-title btn-group">標題：{this.props.data.title}</div>
                    <div className="li-content">內容：{this.props.data.description}</div>
                </div>
                
            </li>
        );
    }
}

export default TODOListItems;