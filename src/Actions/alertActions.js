import alertConstants from '../Constants/alertConstants';

export default {
  success,
  info,
  warn,
  error,
  manual,
  dismiss
}

function success(message) {
  return {
    type: alertConstants.ALERT_SUCCESS,
    message,
  }
}

function info(message) {
  return {
    type: alertConstants.ALERT_INFO,
    message,
  }
}

function warn(message) {
  return {
    type: alertConstants.ALERT_WARNING,
    message,
  }
}

function error(message) {
  return {
    type: alertConstants.ALERT_ERROR,
    message,
  }
}

function manual(message, options) {
  return { message, options };
}

function dismiss(close, key) {
  return () => {
    close(key);
  }
}