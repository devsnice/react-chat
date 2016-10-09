import webpack from "webpack"
import path from "path"
import ExtractTextPlugin from "extract-text-webpack-plugin"

export const PORT = process.env.PORT || 2016;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const PUBLIC_PATH = path.join(__dirname, ".tmp");

process.env.API_URL = process.env.API_URL || "http://localhost:1987";

let config = {
    context: path.join(__dirname, "/client"),

    entry: {
        app: [
            "./client.jsx"
        ],
        vendors: [
            path.join(__dirname, "node_modules/bootstrap/dist/css/bootstrap.min.css"),
            path.join(__dirname, "node_modules/admin-lte/dist/css/AdminLTE.min.css")
        ]
    },
    target: "web",
    output: {
        path: PUBLIC_PATH,
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract("style", "css!stylus")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules|bower_components/,
                loaders: ["babel?presets[]=es2015,presets[]=react,plugins[]=transform-class-properties"]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?name=../.tmp/fonts/[name].[ext]?&limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file?name=../.tmp/fonts/[name].[ext]"
            },
            {
                test: /\.(jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file?name=../.tmp/images/[name].[ext]"
            },
            {
                test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file?name=../.tmp/svg/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.DefinePlugin({
            "global.IS_BROWSER": true,
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_URL: JSON.stringify(process.env.API_URL)
            }
        }),
        new webpack.NoErrorsPlugin()

    ]
};

if (NODE_ENV === "development") {

    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    config.module.loaders[0].loader= "style!css!stylus";
    config.entry.app.unshift("webpack/hot/only-dev-server");
    config.entry.app.unshift("webpack-hot-middleware/client?http://0.0.0.0:" + PORT);

} else {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                unused: true,
                drop_debugger: true,
                drop_console: true
            }
        })
    );

    config.plugins.push(new webpack.optimize.DedupePlugin())
}

export let compiler = webpack(config);