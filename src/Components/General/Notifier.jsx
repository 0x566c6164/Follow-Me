import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';

import alertActions from '../../Actions/alertActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Notifier extends Component {

  componentDidUpdate() {
    const { alert } = this.props;
    if (alert && this.props.closeSnackbar) {
      const action = this.dismissAction;
      this.props.enqueueSnackbar(alert.message, { action, ...alert.options });
    }
  }

  dismissAction = (key) => {
    return (
      <IconButton onClick={() => this.props.closeSnackbar(key)}>
        <CloseIcon />
      </IconButton>
    );
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  dismiss: (close, key) => dispatch(alertActions.dismiss(close, key)),
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Notifier);
export default withSnackbar(connected);