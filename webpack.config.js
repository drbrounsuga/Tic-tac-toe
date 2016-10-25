module.exports = {
    entry: "./src/js/index.js",
    context: __dirname,
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loaders: ["style", "css"]
            },
            { 
                test: /\.(sass|scss)$/,
                exclude: /node_modules/, 
                loaders: ["style", "css", "sass"]
            },
            { 
                test: /\.(jpg|png)$/,
                loaders: ["url"]
            },
            { 
                test: /\.handlebars$/, 
                loader: "handlebars-loader" 
            }
        ]
    }
};