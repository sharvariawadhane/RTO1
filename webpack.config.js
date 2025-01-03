const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // The entry point for your PWA
  output: {
    filename: 'bundle.js', // The name of the output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Process image files (for your icons, maps, etc.)
        use: ['file-loader'],
      },
      {
        test: /\.html$/, // Handle HTML files for the PWA
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), // Clean the output folder before building
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template
      title: 'RTO Special Services', // Set the title for your app
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000, // Port for local server
    historyApiFallback: true, // Allow React Router to work with the browser's history API
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map', // Source maps for easier debugging
};

