// npm install

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // You can switch this to "production" for a production build
    entry: "./src/index.js",
    output: {
        filename: "main.js", // Bundled JS file name
        path: path.resolve(__dirname, "dist"),
        clean: true, // Cleans the output directory before each build
    },
    devtool: "eval-source-map", // Provides source maps for easier debugging
    devServer: {
        static: path.resolve(__dirname, "dist"), // Serve files from the "dist" directory
        watchFiles: ["src/**/*.html"], // Watch all HTML files in the "src" directory for changes
        hot: true, // Enable hot module replacement for faster development
    },
    plugins: [
        // Generates "index.html" from the template
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/home/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // Handles CSS imports
            },
            {
                test: /\.html$/i,
                loader: "html-loader", // Handles HTML imports and dependencies
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource", // Manages image assets
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".json"], // Automatically resolve certain extensions
    },
};
