import Vue from 'vue'
import Vuex from 'vuex'
import Music from './modules/Music'
import Goods from './modules/goods'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{Music,Goods}
    
})