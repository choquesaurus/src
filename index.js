require('@babel/polyfill');
require('@babel/register')({
    /*extends:'./.babelrc',*/
    extensions: [".es6", ".es", ".jsx", ".js", ".mjs"],
    ignore:[/node_modules/]
});
require(`./handler/${proccess.env.handler}`);


