/**
 * Created by zzjj on 2015/10/27.
 */

// 这里声明undefined就是为了兼容低版本ie 因为在低版本ie里undefined不是关键字
// undefined是可以被重写的
(function(global,undefined){


    // 防止重复加载
   if(global.$http)return;
    // 如果window里没有$http 就往window里声明一个$http
   var _h=global.$http={};

    // 默认参数列表,描述ajax行为的
    var defaultOptions={
        type:"get",
        url:"",
        data:{},
        dataType:"text",
        cache:false,
        async:true,
        username:void 0,
        password:void 0,
        success:function(){},
        error:function(e){},
        timeout:0,
        headers:{},
        context:global,
        mimeType:""
    };

    // ajax逻辑核心
 _h.ajax= function (settings) {


        // 判断输入的参数是不是一个对象,如果不是就抛出一个错误

        // 用用户输入的参数对象覆盖到默认参数对象上

        // ajax第一步  获取ajax实例

        //声明一个Verify验证对象的实例,以后要用这个实例来验证参数

        // 第一个验证http method是否合法 第二个验证dataType是否合法

        // 如果data是一个对象,把data转换成uri的格式

        // 如果不走缓存 就往url后面加一个随机数

        // 强转boolean类型

        // 绑定success和error里头的this指向

        //判断超时 最少是500毫秒

            // 判断浏览器兼容性,因为低版本浏览器不支持超时方法
            // 高级浏览器为true

                // 超时毫秒数

                // 超时的时候触发的函数

                        // 强制终止该ajax请求

        // 如果是get系就把data拼接到url后面 并且把data清空

        // ajax操作第二部 调用open方法 并把参数传进去

        // 重写mimetype 因为低版本浏览器不支持overrideMimeType这个方法
        // 所以需要先判断一下在执行

        // ajax操作第三部 注册onreadystatechange

            // 如果ajax操作完成

                // 如果服务器响应码为2开头就算成功了

                    // 判断是否为json格式,是的话就转换为json对象

                            // 为什么要加catch?
                            // 假如服务器返回的是不合法的json字符串,这时候转换就会报错,所以要用try catch抱住  并且调用error方法

                    // 执行成功函数

                // 如果4或5开头就算失败  直接执行error方法

        // 发送请求,并且把参数放到请求主体里
        // 因为在上面get系处理已经把data给情空了 所以现在直接传data也没事
};
    //shim
    // 各种各样的公共方法
var myUtils= {



    // 得到当前浏览器最合适的xhr对象
        getXHR
    :
    (function () {

    })
};
        //  处理循环的方法

        // 惰性函数是一种概念 不和自执行函数一样 只要满足惰性函数的概念 就是惰性函数
        // 把第二个对象合并到第一个对象上头(并不改变老对象),并且返回一个新对象

            // 把新对象覆盖到老对象上头,并且返回一个全新的对象.

        // 把一个对象转换成URI的格式

        // 判断第一个输入的字符串里面有没有问好,如果有问好就拼接一个& 没有的话就直接拼接一个问好

        // 绑定函数里头的this指向

        // 把一串json字符串转换为json对象

    // 利用闭包来生成判断数据类型的函数

    // 循环string object function array  给myUtil动态添加判断数据类型的方法

    // 验证对象

        //如果this是window的话 就返回一个Verify的实例

        // 把验证规则存起来

        // 开始每一项规则验证,不符合规则就抛出错误
})(window);
