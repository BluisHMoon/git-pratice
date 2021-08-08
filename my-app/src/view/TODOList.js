import React, { PureComponent } from 'react';
import TODOListItems from './TODOListItems';

class TODOList extends PureComponent {

    // 刪除物件（向上傳遞→App）
    handleDeleteItem = (itemId) => {
        if (this.props.onDeleteItem) {
            this.props.onDeleteItem(itemId);
        }
    }

    // 將陣列資料依序傳遞給TODOListItems印出
    render() {
        return (
            <div className="list-area">
                <ul className="list-group">
                    {this.props.lists.map((data) =>
                        <TODOListItems data={data} key={data.id} itemId={data.id} onDeleteItem={this.handleDeleteItem} />
                    )}
                </ul>
            </div>
        );
    }
}

export default TODOList;