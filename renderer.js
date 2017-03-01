// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class Appaudio extends React.Component {
    state={
        playing:true,
        url:"http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws"
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    load = (url) =>{
       this.setState({url : url})
    }
    renderLoadButton=(url,label)=>{
        console.log("render load button")
        return(
            <div onClick={()=> this.load(url)}>
                <FlatButton label={label} primary={true} />
            </div>
        )
    }
    render () {
        const{
            playing,url
        }=this.state
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
                    <div>
                        <AppBar title="BBC RADIO" />
                    </div>
                <div>
                    <audio>
                        <ReactPlayer url={url}
                                     playing={playing}
                                     width='100%'
                                     height='100%'
                                     onReady={() => console.log('onReady')}
                        />
                    </audio>
                </div>
                <div onClick={this.playPause}>
                    <FlatButton label={playing? "Stop" : "Start"} primary={true} />
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            {this.renderLoadButton('http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws', 'BBC World Service')}
                            {this.renderLoadButton('http://bbcmedia.ic.llnwd.net/stream/bbcmedia_asianet_mf_p', 'BBC Asian Network')}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </MuiThemeProvider>
            )
    }
}

ReactDOM.render(<Appaudio/>,document.getElementById('appaudio'))
