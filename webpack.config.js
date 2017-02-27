module.exports={
    entry:'./renderer.js',
    output:{
        filename:'./renderer-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                ]
                // loader: 'babel',
                // query: {
                //     presets:['es2015', 'react']
                // }
            }
        ]
    }
}
