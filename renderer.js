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
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Icon from './icon'


class Appaudio extends React.Component {
    state={
        playing:true,
        url:"http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws",
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    load = (url) =>{
       this.setState({url : url})
    }

    render () {
        const tilesData=[
            {
                img:'img/world.png',
                title:"World news",
                link:"http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-einws"
            },
            {
                img:'img/asia.png',
                title:"Asia news",
                link:'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_asianet_mf_p'
            }
        ]
        const{
            playing,url
        }=this.state

        const  gridstyles={
            root:{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'space-around'
            },
            gridList:{
                display:'flex',
                flexWrap:'nowrap',
                overflowX:'auto',
            },
            titleSyle:{
                color:'rgb(0,188,212)'
            },
        }

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
                                     onPlay={() => this.setState({ playing: true })}
                                     onPause={() => this.setState({ playing: false })}
                        />
                    </audio>
                </div>
                <div onClick={this.playPause}>
                    {/*<FlatButton label={playing? "Stop" : "Start"} primary={true} />*/}
                    <Icon size="4rem" icon= {playing? "pause" : "play"}/>
                </div>



                <div style={gridstyles.root}>
                    <GridList style={gridstyles.gridList} cols={2.2}>
                        {tilesData.map((tile) => (
                            <div onClick={()=>{this.load(tile.link)}}>
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                titleStyle={gridstyles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            >
                                <img src={tile.img} />
                            </GridTile>
                            </div>
                        ))}
                    </GridList>
                </div>

                <Paper>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <FlatButton
                        href="https://github.com/callemall/material-ui"
                        target="_blank"
                        label="GitHub Link"
                        secondary={true}
                    />
                </BottomNavigation>
                </Paper>
            </div>
            </MuiThemeProvider>
            )
    }
}

ReactDOM.render(<Appaudio/>,document.getElementById('appaudio'))
