module.exports = {
    entry: {
      main: "./src/js/index.js", //Look for index.js in de src folder
      //vendor: "./src/js/vendor.js" //Look for vendor.js in de src folder 
    }, 
    module: {
        rules: [
          {
            test: /\.html$/, //Look for files ending with .html extension
            use: ["html-loader"] //Transform a src attribute into a require() call
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/, //Look for files ending with these extensions
            use: {
              loader: "file-loader",
              /*Resolve import/require() on the above mentioned files into a url and produce the file into the output directory
              html-loader and file-loader work together*/
              options: {
                name: "[name].[hash].[ext]", //When creating image, keep same name, include a hash and keep same extention
                outputPath: "img", //Create an img folder and place images in here
                esModule: false //This is important to set, otherwise images will not load properly
              }
            }
          },
          {
            // find these extensions in our css, copy the files to the outputPath,
            // and rewrite the url() in our css to point them to the new (copied) location
            test: /\.(woff(2)?|eot|otf|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets:["@babel/preset-env"],
                    plugins: [
                        "@babel/plugin-transform-runtime",
                        ["@babel/plugin-proposal-pipeline-operator", {proposal:"minimal"}]
                    ]
                }
            }
          }
        ],
      }
}