import React from 'react';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            status: this.props.status,
        };

        this.activateEditMode = this.activateEditMode.bind(this);
        this.deactivateEditMode = this.deactivateEditMode.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    };

    activateEditMode() {
        this.setState({
            editMode: true,
        })
    };

    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    };

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value,
        })
    };

    render() {
        return (
            <div className="profile-status">
                {!this.state.editMode
                ?
                <p onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</p>
                :
                <input
                    type="text"
                    value={this.state.status} 
                    autoFocus={true}
                    onBlur={this.deactivateEditMode}
                    onChange={this.onStatusChange} />
                }
            </div>
        );
    }
};

export default ProfileStatus;