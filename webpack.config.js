const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// const optimization = () => {
//   const config = {
//     splitChunks: {
//       chunks: 'all',
//     },
//   };

//   if (isProd) {
//     config.minimizer = [
//       new OptimizeCssAssetsWebpackPlugin(),
//       new TerserWebpackPlugin(),
//     ];
//   }

//   return config;
// };

// const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

// const cssLoaders = (extra) => {
//   const loaders = [
//     {
//       loader: MiniCssExtractPlugin.loader,
//       options: {
//         hmr: isDev,
//         reloadAll: true,
//         modules: true,
//       },
//     },
//     "css-loader",
//   ];

//   if (extra) {
//     loaders.push(extra);
//   }

//   return loaders;
// };

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss', '.json', '.png'],
    // alias: {
    //   "@components": path.resolve(__dirname, "src/components"),
    //   "@": path.resolve(__dirname, "src"),
    // },
  },
  // optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
    historyApiFallback: true,
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-modules-typescript-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: ['file-loader'],
      },
    ],
  },
  mode: 'development',
};
