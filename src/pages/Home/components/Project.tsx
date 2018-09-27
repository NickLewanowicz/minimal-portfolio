import * as React from 'react'

import { Flipped, Flipper } from 'react-flip-toolkit';

// import Profile from '../../../config'
interface IState {
  fullScreen: boolean;
}


class Project extends React.Component<{}, IState> {
  public state: IState = { fullScreen: false };

  public toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen
    }));
  };

  public render() {
    return (
      <Flipper flipKey={this.state.fullScreen}>
          <Flipped flipId="card">

          <div
            className={`bg-near-white ${this.state.fullScreen ? "full-screen-card " : "card"}`}
            onClick={this.toggleFullScreen}
          >
          <Flipped flipId="card">

          <div className={`flex flex-column mw6 ${this.state.fullScreen ? 'center mt3' : ' bb pa2  b--black-10 shadow-hover'}`}>
            <p className='f2 mb1 fw5'>Sample Project.</p>
            <p className=''>Short pitch on what is does.</p>
          </div>
          </Flipped>

          </div>
          </Flipped>

      </Flipper>
    );
  }
}

export default Project