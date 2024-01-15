const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const devOption = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE!
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      }
    ]
  },
  plugins: []
}

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
}
const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
}

module.exports = env => {
  console.log('env', env)
  if (env === 'production') {
    return {
      ...devOption,
      mode: 'production',
      output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        libraryTarget: 'umd',
        library: 'FlexibleReactModal'
      },
      externals: {
        react: reactExternal,
        'react-dom': reactDOMExternal
      },
      plugins: [new CleanWebpackPlugin()]
    }
  } else {
    return devOption
  }
}
