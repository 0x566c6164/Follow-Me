import alertConstants from '../Constants/alertConstants';

const initialState = null;
function alertReducer(state=initialState, action) {
  const { message, options={} } = action;
  let myOptions ={...options};
  switch(action.type) {
    case alertConstants.ALERT_SUCCESS: {
      myOptions.variant = 'success';
      break;
    }
    case alertConstants.ALERT_INFO: {
      myOptions.variant = 'info';
      break;
    }
    case alertConstants.ALERT_WARNING: {
      myOptions.variant = 'default';
      break;
    }
    case alertConstants.ALERT_ERROR: {
      myOptions.variant = 'error';
      break;
    }
    case alertConstants.ALERT_MANUAL: {
      break;
    }
    default: {
      return state;
    }
  }
  return {message, options: myOptions};
}
export default alertReducer;