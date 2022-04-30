const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "/build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".html", ".css", ".ts", ".tsx"],
        alias: {
            '@': path.resolve('src'),
            '@@': path.resolve('src/components')
        },
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: ["babel-loader",],
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 25000,
                },
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve("./public/index.html"),
        filename: "index.html"
    }), new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(), new webpack.NoEmitOnErrorsPlugin()],
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000,
        compress: true
    }
}
