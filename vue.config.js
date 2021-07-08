// 由于vuecli3中，配置文件都被隐藏起来了，所以需要自己创建该文件
// 会自动添加到配置文件中
module.exports = {
    configureWebpack: {
        resolve:{
            // 省略后缀名，默认已经配置 .js .css .vue
            // extensions: [".js",".css",".vue"],
            // 配置路径别名，避免出现  ../../../base.css 类似的文件路径
            alias: {
                // 默认已经配置 ‘src’: '@'
                'src': '@',
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}

