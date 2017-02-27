// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

// class App extends React.Component {
//   render () {
//     return (
//       <h1>Minimalistic Electron React Boilerplate Code :)</h1>
//     )
//   }
// }

class Appaudio extends React.Component {
    render () {
        return(
            <audio>
                <ReactPlayer url='http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws' playing />
            </audio>
            )
    }
}

// ReactDOM.render(<App/>,document.getElementById('app'))
ReactDOM.render(<Appaudio/>,document.getElementById('appaudio'))
