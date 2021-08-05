import React from 'react';

class TODOForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: Date.now(),
            title: '',
            description: '',
            isEditing: false,
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
        if (this.state.title.length !== 0 && this.state.description.length !== 0 && this.props.submitTODO) {

            this.props.submitTODO(this.state);

            this.setState({
                id : Date.now(),
                title : '',
                description : '',
            });
        }else{
            return false;
        }
    }

    render() {
        return (
            <div className="list">
                <div className="input-area">
                    標題輸入框　
                    <input
                        className="text-input"
                        type="text"
                        name="title"
                        onChange={this.handleTitleChange.bind(this)}
                        value={this.state.title}
                    />
                </div>
                <div className="input-area">
                    內容輸入框　
                    <input
                        className="text-input"
                        type="text"
                        name="description"
                        onChange={this.handleDescriptionChange.bind(this)}
                        value={this.state.description}
                    />
                </div>
                <div className="btn-area">
                    <button
                        type="button"
                        name="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >
                        新增
                    </button>
                </div>
            </div>
        );
    }
}

export default TODOForm;
