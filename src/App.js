import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Inssaf Benkhaldoun',
      bio: 'An enthusiastic software craftsmanr',
      imgSrc: '/femme-affaires-brune-aux-cheveux-longs-ondules-aux-yeux-bleus-tient-cahier-dans-mains.jpg',
      profession: 'Software Engineer',
       email: 'inssafben@gmail.com',
       Location: 'New York,USA',
       skills:'Proficient in a variety of programming languages including Java Python and JavaScript',
    },
    show: false,
    mountedTime: null
  };

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App background-container">
        <button onClick={this.toggleProfile}>
          Toggle Profile
        </button>
        
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
            <p>Email:inssafben@gmail.com</p>
  <p>Location: New York, USA</p>
          </div>
        )}

        <p className="time-since">Time since last mount: {Math.floor((new Date() - mountedTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
