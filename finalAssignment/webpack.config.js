const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const express = require('express');
module.exports = {
    mode : "development",
    entry : './resources/script/script.js',
    //target : 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/resources/images',
    },
    devServer : {
        static : "./dist",
        setupMiddlewares: (middlewares, devServer) => {
            devServer.app.use('/images/', express.static(path.resolve(__dirname, './resources/images')));
            return middlewares;
          }
    },
    // plugins : [
    //     new htmlWebpackPlugin({
    //         title : "welcome",
    //     }),
    // ],
    // module: {
    //     rules :[
    //         {
    //             test : /\.css$/i,
    //             use :["style-loader", "css-loader"],
    //         },
    //     ],
    // },
    module: {
        rules :[
            {
                test : /\.s[ac]ss$/i,
                use :["style-loader", "css-loader","sass-loader"],
            },
        ],
        // loaders : [
        //     {
        //         test: /\.(jpe?g|png|gif|svg)$/i, 
        //         loader: 'file-loader',
        //         options: {
        //           name: '../resources/images/[name].[ext]'
        //         }
        //     },
        // ],
    },

};

