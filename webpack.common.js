const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  entry:path.join(__dirname,'src/index.ts'),
  output:{
    filename:'databasify.js',
    path:path.join(__dirname, 'dist/'),
    library:'databasify'
  },
  plugins:[new ESLintPlugin({extensions:['ts'], fix:true})],
  resolve:{
    extensions:['.js', '.ts']
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:'ts-loader'
      }
    ]
  }
}