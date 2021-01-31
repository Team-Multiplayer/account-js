const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathToMainJs = require.resolve("./src/app.js");
const pathToIndexCss = require.resolve("./src/css/style.css");
const pathToIndexHtml = require.resolve("./src/index.html");
const pathToBanner = require.resolve("./src/img/banner.jpg");
const pathToBannerCrypto = require.resolve("./src/img/banner-crypto.jpg");
const pathToBannerMobile = require.resolve("./src/img/banner-mobile.jpg");
const pathToHome1 = require.resolve("./src/img/home-1.jpg");
const pathToHome2 = require.resolve("./src/img/home-2.png");
const pathToHome3 = require.resolve("./src/img/home-3.png");
const pathToLogin = require.resolve("./src/img/login.jpg");

module.exports =  {
  entry: [
    '@babel/polyfill',
    pathToMainJs,
    pathToIndexHtml,
    pathToIndexCss,
    pathToBanner,
    pathToBannerCrypto,
    pathToBannerMobile,
    pathToHome1,
    pathToHome2,
    pathToHome3,
    pathToLogin
  ],
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        type: 'asset/resource',
        generator: {
          filename: 'css/[name][ext][query]'
        }
      },
      {
        test: /\.html$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]'
        }
      },
    ]
  }
};
