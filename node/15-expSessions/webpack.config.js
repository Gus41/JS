const path = require("path") // commonJS

module.exports = { // tudo que tiver nesse obj sera exportado
    // sera a configuração do webpak
    mode:"production", //development
    entry: "./frontend/index.js", //arquivo de entrada
    output:{ 
        path: path.resolve(__dirname,"public","assets","js"), // caminho onde o bundle sera colocado
        filename: "bundle.js"
    },
    module: {
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }, {
            test: /\.css/,
            use : ["style-loader","css-loader"]
        }]
    },
    devtool: "source-map" //mapeamento de erro no arquivo original

}