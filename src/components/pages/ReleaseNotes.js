import React from 'react';

class ReleaseNotes extends React.Component {
  render() {
    return(
      <section>
        <div className="container row">
          <div className="col padding-xxlg">
            <h1>Release Notes!</h1>
             {/* ---------------------------------- */}
             <h2>
              <span className="date">5/22/2022</span> | New game mode! |
              <span className="version">v1.0.0</span><span className="tag release">release</span>
            </h2>
            <ul>
              <li>Brand new 90 ball game mode!</li>
              <li>Added fun chatter for each number.</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default ReleaseNotes;