import React from 'react';
import { connect } from 'react-redux';

import Auth from './Components/General/Auth';
import Greet from './Components/General/Greet';
import PersonList from './Components/Users/PersonList';

import userActions from './Actions/userActions';
import peopleActions from './Actions/peopleActions';

import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  async componentDidMount() {
    await this.props.autoLogin();
    this.setState({ loaded: true })
    await this.props.loadPeople();
  }

  render() {
    const { user } = this.props;
    return (
      <div className='App'>
      {
        this.state.loaded === false ?
        <CircularProgress /> :
        <>
          <Auth />
          <Greet />
        </>
      }
      { user.name ? <PersonList /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  autoLogin: () => dispatch(userActions.autoLogin()),
  loadPeople: () => dispatch(peopleActions.loadPeople()),
});

const connected = connect(mapStateToProps, mapDispatchToProps)(App);
export default connected;