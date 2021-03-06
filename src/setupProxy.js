const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(proxy('/index.php',{
        target:'http://www.taowupai.com',
        changeOrigin:true
    }))
    app.use(proxy('/ajax',{
        target:'http://www.taowupai.com',
        changeOrigin:true
    }))
    app.use(proxy('/api',{
        target:'http://www.taowupai.com',
        changeOrigin:true
    }))
    app.use(proxy('/api',{
        target:'http://cmsjapi.dataoke.com',
        changeOrigin:true
    }))
}