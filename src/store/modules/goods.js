import {Getlist} from '@/untils/api'


export default {
    namespaced: true,
    state:{
        goodlist:{}
    },
    getter:{},
    mutations:{
        GetmGoods(state,payload){
            state.goodlist[payload.index]=payload.list
            state.goodlist = JSON.parse(JSON.stringify( state.goodlist))
        },
        clearList(state){
            state.goodlist={}

        }
    },
    actions:{
        GCly(store){
            store.commit("clearList")
        },
        Getgoods(store,payload){
            //
            Getlist({cate:payload.cate}).then((res)=>{
                
                store.commit('GetmGoods', {index: payload.index,list:res.list})
            })
        }

    }
}