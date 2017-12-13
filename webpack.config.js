// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const path = require('path')
//
// var cssConfig = {
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
//   },
//   plugins: [
//     new ExtractTextPlugin('styles.css')
//   ]
// }
//
// var {
//     entry: "./index.js",
//     output: {
//        path: path.resolve(__dirname, 'dist'),
//        filename: "bundle.js"
//     },
// }
//
// // Return Array of Configurations
// module.exports = [
//     cssConfig, jsConfig,
// ];
