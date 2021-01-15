

#项目总结

这是一个使用vue开发的webapp项目。

#前期准备

1.安装环境以及各种包，由于用npm从官网下载不稳定，一般先安装淘宝镜像：

npm install -g cnpm --registry=https://registry.npm.taobao.org

2.脚手架

cnpm install @vue/cli -g  //下包
Vue create vue-study  //创建一个项目‘vue-webapp’
cd vue-webapp   //进入项目

npm run serve  //启动开发环境，
一般使用npm start代替，具体操作：
在package.js里，在script里： "start": "npm run serve"

当项目跑不起来时，你可以试着把node_modules包删干净，重装：
cnpm install

3.路由
   安装路由
    cnpm install vue-router -S  //下载相关包
    在src根目录下新建一个router.js的文件，在里面写如下代码
    imporrt Vue from 'vue'
    import VueRouter from 'vue-router'  //引入
    Vue.use(VueRouter)   //路由注册，即可得到相关方法
    export default new Vuerouter({  
        routes:[]     
    })                    //抛出

    在main.js入口文件中，把路由系统挂载到Vue系统中
    import router from './router.js'
    new Vue({
        router
    })

4. 状态管理
   状态管理工具在Vue项目架构中是可选的。但是，从项目发展角度看，最好还安装、集成一下。
   Vuex，它是Vue全家桶中最流利使用的状态工具。
   主要作用：

   * 组件之间数据共享
   * 实现数据缓存

   DevTools安装
   下载地址：https://github.com/arcliang/Vue-Devtools-

   Vuex安装
   cnpm install vuex -S

   在src根目录，创建 /store/index.js 文件，代码如下：

   ```
   import Vue from 'vue'
   import Vuex from 'vuex'
   Vue.use(Vuex)
   
   export default new Vuex.Store({
   state: {},
   getters: {},
   mutations: {},
   actions: {}
   })
   ```

   在 main.js 中挂载：

   ```
   import store from './store/index.js'
   new Vue({
   store
   }).$mount('#app')
   ```

   在组件中如何使用Vuex中的数据呢？

   ```
   this.$store.state.msg
   ```

   在组件中如何更新Vuex中的数据呢？

   ```
   this.$store.commit('mutationFn', payload)
   ```

   如何优雅地使用Vuex来管理应用程序中的外部数据？

   把外部数据定义在Vuex的state中，页面中就可以通过 $store.state来使用了。
   封装api接口（参考utils/api.js）
   在Vuex导入api方法，在actions中定义与后端交互的逻辑，把处理完成的数据通过mutations方法提交到state
   在mutations中定义 更新state的方法。当state变化时，页面自动更新
   那么actions在哪里被触发呢？在页面逻辑中触发它。

   【温馨提示】：建议在组件使用 map* 系列方法来使用Vuex中的数据和函数
   mapState 和 mapGetters 在写在 computed 中
   mapActions 和 mapMutations 写在 methods 中

5. axios

   它是一个HTTP工具，用于与后端进行数据交互。
   特点：
   1、基于Promise封装的库
   2、在客户端、Node端都可以使用

   在项目中怎么使用呢？
   1、cnpm install axios -S
   2、一定要封装请求拦截器和响应拦截器。参考 utils/axios.js
   3、最好把所有api统一封装可以复用的方法。参考 utils/api.js    


# 主要用到的技术栈有

1. 作为一款webapp项目，首先是使用REM
   REM：将屏幕尺寸等分，现在市场上一般是10等分，即1REM=1/10 屏幕尺寸
2. vue  
   渐进式JavaScript 框架
3. vue-router   
   Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌
4. vuex  
   Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension (opens new window)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
   Vuex中的五大概念

* state
* getters
* mutations
* actions
* mudules
  Vuex一般适用于中大型的项目，如果项目够简单，不建议使用，vuex反而会冗余

5. sass
   使用sass来控制样式，相比于css更加简洁，控制更加精准，结构一目了然
   cnpm install sass-loader -D
   cnpm install node-sass -D

6. 使用到的UI框架
   主要是使用到vant：Vant 是有赞前端团队开源的移动端组件库。
   我们使用了自动按需引入组件，避免一次性引入造成的代码冗余。
   具体操作：
   (1)  #安装插件 : npm i babel-plugin-import -D
   (2)  对于使用 babel7 的用户，可以在 babel.config.js 中配置

    ``` 
    module.exports = {
     plugins: [
         ['import', {
         libraryName: 'vant',
         libraryDirectory: 'es',
         style: true
         }, 'vant']
     ]
     };
    ```

     接着你可以在代码中直接引入 Vant 组件   // 插件会自动将代码转化为方式二中的按需引入形式
     import { Button } from 'vant';

* 这个项目中，我用的比较多的组件有：
  (1) 布局方面用到了栅格系统，Layout 提供了 van-row 和 van-col 两个组件来进行行列布局
  (2) 通过Icon组件大量用到了一些icon小图标
  (3) Button组件
  (4) Checkbox  复选框组件
  (5) Form 表单组件
  (6) Dialog 弹出框
  (7) PullRefresh 下拉刷新组件
  (8) SwipeCell 滑动组件
  (9) Lazyload  懒加载组件
  (10) Swipe 轮播图组件
  (11) NavBar 、Sidebar、Grid、Tabbar 等导航组件...
  用法大都都是引入后即可使用。有一些多页面频繁使用的可以采用二次封装组件，例如Tabbar标签栏，我就采用了二次封装，使用更加方便简洁，减少代码量。

#  团队组成

 前端2人，后端2人，项目开发周期3个月

# 功能模块

主要有：商品展示模块（首页、广告页、促销页、商品详情页）、购物车模块、个人中心模块、订单模块
我主要负责的模块有商品展示模块、购物车模块

# 项目亮点

界面简洁，操作简单易懂，同时又更加注重用户体验。采用token，路由守卫双重保护，杜绝用户个人信息泄露，更安全。全程采用单页面组件化开发，代码分工明确，易于管理。

# 项目难点

UI还原度要求高，由于这是一个购物页面，对用户交互体验要求高，以及对安全性要求高。为了吸引顾客，页面样式需要频繁更新，对代码各功能模块要非常熟悉

# 一些主要技术问题

SEO优化：主要是通过关键词的收录来提高网站的排名
做法：尽量写静态页面，能写死的就写死，拒绝大量的js和动画。
关键字要清楚适量，可以适度的添加title，以及图片的alt属性。
标签尽量语义化，便于浏览器的抓取，还可以使用外链和内链。

图片优化
这是一个很重要的操作，对项目上线影响较大。
主要做法是采用图片模块化管理。以及对图片加载做懒加载处理。

埋点
我们这是个购物网站，添加埋点是非常有必要的。有利于了解顾客需求，及时推送产品。
实现方式：埋点就是通过植入一段代码到某个页面或某个按钮，从而监听用户行为并进行收集上报

下拉刷新 触底加载
作为一个购物网站，这是一个必须的功能
这里我主要是用到了vant库里的List组件和PullRefresh组件实现这个功能。
这里有多个细节，比如PullRefresh需要包括到整个页面，这样才能做到在屏幕任何地方下拉都可刷新，而不是只有拉列表。
以及下拉刷新和触底加载的交互，下拉后需要重置触底加载的状态，这样才能做到下拉后能刷新。

权限问题
作为一个购物网站，首页是不需要登录即可查看，但是进行加入购物车查看购物车等操作、以及进入个人主页则需要进行账号验证，如未登录则不能查看，自动跳转到登录页面。这里就使用到了token，token相对于以前的cookie拥有更高的安全性。也可使用路由守卫进行验证

#项目总结

这是一个使用vue开发的webapp项目。

#前期准备

1.安装环境以及各种包，由于用npm从官网下载不稳定，一般先安装淘宝镜像：

npm install -g cnpm --registry=https://registry.npm.taobao.org

2.脚手架

cnpm install @vue/cli -g  //下包
Vue create vue-study  //创建一个项目‘vue-webapp’
cd vue-webapp   //进入项目

npm run serve  //启动开发环境，
一般使用npm start代替，具体操作：
在package.js里，在script里： "start": "npm run serve"

当项目跑不起来时，你可以试着把node_modules包删干净，重装：
cnpm install

3.路由
   安装路由
    cnpm install vue-router -S  //下载相关包
    在src根目录下新建一个router.js的文件，在里面写如下代码
    imporrt Vue from 'vue'
    import VueRouter from 'vue-router'  //引入
    Vue.use(VueRouter)   //路由注册，即可得到相关方法
    export default new Vuerouter({  
        routes:[]     
    })                    //抛出

    在main.js入口文件中，把路由系统挂载到Vue系统中
    import router from './router.js'
    new Vue({
        router
    })

4. 状态管理
    状态管理工具在Vue项目架构中是可选的。但是，从项目发展角度看，最好还安装、集成一下。
    Vuex，它是Vue全家桶中最流利使用的状态工具。
    主要作用：
    * 组件之间数据共享
    * 实现数据缓存

    DevTools安装
    下载地址：https://github.com/arcliang/Vue-Devtools-

    Vuex安装
    cnpm install vuex -S

    在src根目录，创建 /store/index.js 文件，代码如下：
    ```
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)

    export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
    })
    ```
    在 main.js 中挂载：
    ```
    import store from './store/index.js'
    new Vue({
    store
    }).$mount('#app')
    ```
    在组件中如何使用Vuex中的数据呢？
    ```
    this.$store.state.msg
    ```
    在组件中如何更新Vuex中的数据呢？
    ```
    this.$store.commit('mutationFn', payload)
    ```

    如何优雅地使用Vuex来管理应用程序中的外部数据？

    把外部数据定义在Vuex的state中，页面中就可以通过 $store.state来使用了。
    封装api接口（参考utils/api.js）
    在Vuex导入api方法，在actions中定义与后端交互的逻辑，把处理完成的数据通过mutations方法提交到state
    在mutations中定义 更新state的方法。当state变化时，页面自动更新
    那么actions在哪里被触发呢？在页面逻辑中触发它。

    【温馨提示】：建议在组件使用 map* 系列方法来使用Vuex中的数据和函数
    mapState 和 mapGetters 在写在 computed 中
    mapActions 和 mapMutations 写在 methods 中

5. axios

    它是一个HTTP工具，用于与后端进行数据交互。
    特点：
    1、基于Promise封装的库
    2、在客户端、Node端都可以使用

    在项目中怎么使用呢？
    1、cnpm install axios -S
    2、一定要封装请求拦截器和响应拦截器。参考 utils/axios.js
    3、最好把所有api统一封装可以复用的方法。参考 utils/api.js    


# 主要用到的技术栈有
1. 作为一款webapp项目，首先是使用REM
REM：将屏幕尺寸等分，现在市场上一般是10等分，即1REM=1/10 屏幕尺寸
2. vue  
渐进式JavaScript 框架
3. vue-router   
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌
4. vuex  
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension (opens new window)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
Vuex中的五大概念
* state
* getters
* mutations
* actions
* mudules
Vuex一般适用于中大型的项目，如果项目够简单，不建议使用，vuex反而会冗余
5. sass
使用sass来控制样式，相比于css更加简洁，控制更加精准，结构一目了然
cnpm install sass-loader -D
cnpm install node-sass -D
6. 使用到的UI框架
主要是使用到vant：Vant 是有赞前端团队开源的移动端组件库。
我们使用了自动按需引入组件，避免一次性引入造成的代码冗余。
具体操作：
(1)  #安装插件 : npm i babel-plugin-import -D
(2)  对于使用 babel7 的用户，可以在 babel.config.js 中配置
   ``` 
   module.exports = {
    plugins: [
        ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
        }, 'vant']
    ]
    };
   ```
    接着你可以在代码中直接引入 Vant 组件   // 插件会自动将代码转化为方式二中的按需引入形式
    import { Button } from 'vant';

* 这个项目中，我用的比较多的组件有：
(1) 布局方面用到了栅格系统，Layout 提供了 van-row 和 van-col 两个组件来进行行列布局
(2) 通过Icon组件大量用到了一些icon小图标
(3) Button组件
(4) Checkbox  复选框组件
(5) Form 表单组件
(6) Dialog 弹出框
(7) PullRefresh 下拉刷新组件
(8) SwipeCell 滑动组件
(9) Lazyload  懒加载组件
(10) Swipe 轮播图组件
(11) NavBar 、Sidebar、Grid、Tabbar 等导航组件...
用法大都都是引入后即可使用。有一些多页面频繁使用的可以采用二次封装组件，例如Tabbar标签栏，我就采用了二次封装，使用更加方便简洁，减少代码量。

#  团队组成
 前端2人，后端2人，项目开发周期3个月

# 功能模块
主要有：商品展示模块（首页、广告页、促销页、商品详情页）、购物车模块、个人中心模块、订单模块
我主要负责的模块有商品展示模块、购物车模块

# 项目亮点
界面简洁，操作简单易懂，同时又更加注重用户体验。采用token，路由守卫双重保护，杜绝用户个人信息泄露，更安全。全程采用单页面组件化开发，代码分工明确，易于管理。

# 项目难点
UI还原度要求高，由于这是一个购物页面，对用户交互体验要求高，以及对安全性要求高。为了吸引顾客，页面样式需要频繁更新，对代码各功能模块要非常熟悉

# 一些主要技术问题
SEO优化：主要是通过关键词的收录来提高网站的排名
做法：尽量写静态页面，能写死的就写死，拒绝大量的js和动画。
关键字要清楚适量，可以适度的添加title，以及图片的alt属性。
标签尽量语义化，便于浏览器的抓取，还可以使用外链和内链。

图片优化
这是一个很重要的操作，对项目上线影响较大。
主要做法是采用图片模块化管理。以及对图片加载做懒加载处理。

埋点
我们这是个购物网站，添加埋点是非常有必要的。有利于了解顾客需求，及时推送产品。
实现方式：埋点就是通过植入一段代码到某个页面或某个按钮，从而监听用户行为并进行收集上报

下拉刷新 触底加载
作为一个购物网站，这是一个必须的功能
这里我主要是用到了vant库里的List组件和PullRefresh组件实现这个功能。
这里有多个细节，比如PullRefresh需要包括到整个页面，这样才能做到在屏幕任何地方下拉都可刷新，而不是只有拉列表。
以及下拉刷新和触底加载的交互，下拉后需要重置触底加载的状态，这样才能做到下拉后能刷新。

权限问题
作为一个购物网站，首页是不需要登录即可查看，但是进行加入购物车查看购物车等操作、以及进入个人主页则需要进行账号验证，如未登录则不能查看，自动跳转到登录页面。这里就使用到了token，token相对于以前的cookie拥有更高的安全性。也可使用路由守卫进行验证



# 后台管理系统的项目小结

  1. 技术栈: vue、路由、sass、 axios. vuex
  2. UI框架:没有开发ui图，使用elementui框架
  3. 团队组成:前端2人，后端2人，项目开发周期3个月
  4. 我的模块:登陆模块、商品新增模块、
  5. 项目亮点:
  6. 项目难点:

# 1、技术栈: vue、路由、sass、 axios. vuex

 1. 环境

    ```
    node v12+
    node -v
    npm -v
    ```

    安装淘宝镜像：

    ```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

 2. 脚手架

    ```
    cnpm install @vue/cli -g
    vue create vue-study
    cd vue-study
    npm run serve  // 启动开发环境
    成功后在.json里 配置 npm start 启动
    ```

 3. 路由
    1、如何安装路由？

    ```
    cnpm install vue-router -S   // 表示代码中要用到的包
    ```

    在 src 根目录中新建一个 router.js 的文件，代码如下：

    ```
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)  // 路由注册
    
    export default new VueRouter({
    routes: []
    })
    ```

    在 main.js 入口文件中，把路由系统挂载到Vue系统中去

    ```
    import router from './router.js'
    
    new Vue({
    router
    })
    ```

  4. DevTools安装调试工具

     下载地址：https://github.com/arcliang/Vue-Devtools-


  5. Vuex安装

     ```
     cnpm install vuex -S
     ```

     在src根目录，创建 /store/index.js 文件，代码如下：

     ```
     import Vue from 'vue'
     import Vuex from 'vuex'
     Vue.use(Vuex)
     
     export default new Vuex.Store({
     state: {},
     getters: {},
     mutations: {},
     actions: {}
     })
     ```

     在 main.js 中挂载：

     ```
     import store from './store/index.js'
     new Vue({
     store
     }).$mount('#app')
     ```

  6. axios
     1、cnpm install axios -S
     2、一定要封装请求拦截器和响应拦截器。参考 utils/axios.js
     3、最好把所有api统一封装可以复用的方法。参考 utils/api.js

# 2、UI框架:没有开发ui图，使用elementui框架

  1. 安装 Element
     cnpm install element-ui -S

     ```
     import ElementUI from 'element-ui'
     import 'element-ui/lib/theme-chalk/index.css'
     Vue.use(ElementUI)
     ```

 2. 安装 sass 

    ```
    cnpm install sass-loader -D
    cnpm install node-sass -D
    ```

    <style lang='scss' scoped>
    </style>



# 3、团队组成:前端2人，后端2人，项目开发周期3个月

# 4、我的模块:登陆模块、商品新增模块、

 1. 登陆模块
        实现思路: 获取用户表单信息，提交后给后端接口验证，如果匹配则返回一个token,使用cookie存储，再根据token去拉取用户信息接获取信息，这里的具体操作主要看后端接口如何书写，登录成功后，跳转至主页面。

        这里使用自定义配置创建axios实例：axios.create（[config]），指定的配置将与实例配置合并：axios＃get（url[，config]），这里会配置基本路径和超时时间。还使用了axios拦截器,这里使用request拦截器是为了在每个请求头塞入token,好让后端对请求进行权限验证（根据业务而定），response拦截器，当服务端返回特殊的状态码，做统一处理。
        其中有一个导航守卫，有组件需要登录才能展示，这个练习项目中，是先登录才能展示其他页面，不登录无法展示页面，所以有一个全局的导航守卫。这里注册一个全局前置守卫,当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
        每个守卫方法接收三个参数：
          ```
                router.beforeEach((to, from, next) => {
               // ...
               })
           ```
           ```
                router.beforeEach((to,from,next)=>{
            if(getToken()){
                if(to.path==='/login'){
                    next({path:'/'})
                }else{
                    if(store.getters.roles.length===0){  //判断当前用户是否已拉取完user_info信息
                        store.dispatch('GetInfo').then(res=>{//拉取user_info
                            next()
                        }).catch(()=>{
                            store.dispatch('FedLogOut').then(()=>{
                                Message.error('验证失败，请重新登录')
                                next({path:'/login'})
                            })
                        })
                    }else{
                        next()
                    }
                }
            }else{
                if(whiteList.indexOf(to.path)!==-1){
                    next()
                }else{
                    next('/login')
        
                }
            }
        })
        ```

    具体实现思路，当用户点击提交按钮，对表单信息格式验证，如果通过则触发vuex的actions里面login方法，在回调中跳转至主页面。actions的login方法的主要操作是调用api接口,处理数据，login里面是设置cookie('Token',token)和改变state的token,因为是调用的api接口，所以在api里面的login接口，是主要书写接口的。
    api文件的login接口:
        ```
            import axios from '@/utils/axios'  //axios中，创建了axios实例和拦截器的书写
        export const login=(username, password)=>{
        return axios.post('/user/login',{username,password})
        }
        ```
    actions的instance方法:
        ```
        // 封装请求拦截器
    instance.interceptors.request.use(function (config) {
    // 在请求被send出去之前，你可以在这里做一些事儿
    // 加token
    // console.log('请求拦截器', config)
    config.headers.Authorization = localStorage.getItem('token')
    return config
    }, function (error) {
    return Promise.reject(error)
    })

    // 封装响应拦截器
    instance.interceptors.response.use(function (res) {
    let response = null
    // 当后端返回数据，抵达客户端之前时
    // 要数据过滤
    // 对后端响应的错误信息进行处理
    // console.log('响应拦截器', res)
    if (res.status===200) {
        if(res.data) {
        let err = res.data.err
        if (err===0) {
            response = res.data.data
        } else if (err===-1) {
            // 当token无效
            window.location.href = '/login'
        } else {
            // 用element交互提示框。。。。
        }
        }
    } else {
        console.log('调接口失败')
    }
    return response
    }, function (error) {
    return Promise.reject(error)
    })
        ```

    2. 商品新增模块
       实现思路: 用v-model双向绑定,用户上传商品名称,描述;上传的信息较大,用post请求在数据库写入.调取后端接口,提交数组,保存上传的信息,.
       上传规则设定:在表单里绑定rules='rules',
       data中设置rules:

    ```
    rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写商品描述', trigger: 'blur' },
          { min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur' }
        ],
        cate: [
          { required: true, message: '请选择商品品类', trigger: 'change' }
        ]
      },
      dialogVisible: false
    }
    ```

    图片上传 按钮绑定:on-success='imgSuccess'
    成功设置弹窗:

    ```
    methods: {
    imgSuccess(res) {
      console.log('图片上传成功', res)
      // 当图片上传成功，把后端返回的url信息赋值给当前表单对象
      this.info.img = res.data.url
    },
    ```

     提交成功,事件 @click="submitForm 绑定
     编程式路由导航跳转列表页

    ```
        submitForm() {
    console.log('商品信息', this.info)
    this.$http.fetchGoodAddOrEdit(this.info).then(()=>{
        // 当商品添加成功时，跳转到商品列表页
        this.$router.replace('/good/list')
    })
    ```

  


# 5、项目亮点:

系统界面简洁直观、操作便捷。采用token,路由守卫;双重保护,更安全,更稳定.组件化开发,更快的加载.

# 6、项目难点:

 业务复杂（表单多、表格筛选条件多），后端接口多、不稳定，产品需求不稳定。小团队加强沟通。





