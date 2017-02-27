// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

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
            <button onClick={()=>this.load(url)}>
                {label}
            </button>
        )
    }
    render () {
        const{
            playing,url
        }=this.state
        return(
            <div>
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
                <button onClick={this.playPause}> {playing? "Stop" : "Start"}</button>
                <table>
                    <tbody>
                    <tr>
                        <th>BBC</th>
                        <td>
                            {this.renderLoadButton('http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws', 'BBC World Service')}
                            {this.renderLoadButton('http://bbcmedia.ic.llnwd.net/stream/bbcmedia_asianet_mf_p', 'BBC Asian Network')}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            )
    }
}

ReactDOM.render(<Appaudio/>,document.getElementById('appaudio'))
