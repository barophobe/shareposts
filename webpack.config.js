const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: __dirname + '/public',
        // path: path.resolve(__dirname, '/public'),
        // publicPath: '/public'
    },
mode: 'none',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                       [
                        'autoprefixer',
                        {
                        },
                         ],
                      ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }  
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        })
    ]
};


