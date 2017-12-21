const path = require('path')

// const cssConfig = {
//   entry: './style.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.css',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: [
//             { loader: 'css-loader', options: { importLoaders: 1 } },
//             'postcss-loader'
//           ]
//         })
//       }
//     ]
//   }
// }

const jsConfig = {
    entry: "./javascript/main.js",
    output: {
       path: path.resolve('./built'),
       filename: "bundle.js"
    },
}

// Return Array of Configurations
module.exports = [
    jsConfig
]
