import React from 'react';

class TODOForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
        }
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value,
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value,
        });
    }

    handleSubmit() {
        if (this.props.title !== '' && this.props.description !== '') {
            this.setState({
                id: Date.now()
            });
        }
    }

    render() {
        return (
            <div className="list">
                <div className="input-area">
                    標題輸入框
                    <input
                        type="text"
                        name="title"
                        onChange={this.handleTitleChange.bind(this)}
                        value={this.state.title}
                    />
                </div>
                <div className="input-area">
                    內容輸入框
                    <input
                        type="text"
                        name="description"
                        onChange={this.handleDescriptionChange.bind(yhis)}
                        value={this.state.description}
                    />
                </div>
                <div className="btn-area">
                    <button
                        type="button"
                        name="submit"
                        onClick={this.handleSubmit}
                    >
                        新增
                    </button>
                </div>
            </div>
        );
    }
}

export default TODOForm;
