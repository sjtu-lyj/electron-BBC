/**
 * Created by steven on 2017/3/2.
 */
//https://gist.github.com/rudin/bf1c4098d40a91e939abf659ba941d21
// http://dmfrancisco.github.io/react-icons/
// http://www.rudinswagerman.nl/

/*
 <Icon size="2rem" icon="my-icon" />
 */

import React from 'react';

const renderGraphic = icon => {
    switch (icon) {
        case 'pause':
            return (
                <g><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></g>
            );
        case 'play':
            return (
                <g><path d="M8 5v14l11-7z"/></g>
            );
        // Add more icons here
    }
}

const styles = size => ({
    fill: 'currentcolor',
    verticalAlign: 'middle',
    width: size,
    height: size
});

export default ({icon, size, style}) => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
         style={{...styles(size? size : 24), ...style}}>
        {renderGraphic(icon)}
    </svg>
);
