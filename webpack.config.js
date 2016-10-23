module.exports = {
    entry: "./src/js/index.js",
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
                test: /\.scss$/, 
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};