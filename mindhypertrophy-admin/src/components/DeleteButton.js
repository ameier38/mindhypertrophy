import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import { DELETE } from 'admin-on-rest'
import restClient from '../restClient'
import { showNotification as showNotificationAction } from 'admin-on-rest'
import { push as pushAction } from 'react-router-redux'

class DeleteButton extends Component {
    handleClick = () => {
        const { resource, push, record, showNotification } = this.props;
        restClient(DELETE, resource, { id: record.id })
            .then((instance) => {
                showNotification(`Deleted ${resource}/${instance.id}`);
                push(`/${resource}`);
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: could not delete', 'warning')
            });
    }

    render() {
        return <FlatButton icon={<ActionDelete />} onClick={this.handleClick} />;
    }
}

DeleteButton.propTypes = {
    resource: PropTypes.string,
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
}

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(DeleteButton)