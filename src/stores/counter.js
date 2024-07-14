import { defineStore } from "pinia";
import {computed, ref} from 'vue'
import axios from "axios";
const API_URL = 'http://geek.itheima.net/v1_0/channels'

export const useCounterStore = defineStore("counter", () => {
  //定义数据(state)
  const count = ref(0);
  //定义修改数据的方法(action)
  const increment = () => {
    count.value++;
  };
  
  //getter
  const doubleCount = computed(()=>count.value*2)

  //异步action
  const list = ref([])
  const getList = async () =>{
    const res = await axios.get(API_URL)
    list.value = res.data.data.channels
  }

  return {
    count,
    increment,
    doubleCount,
    list,
    getList,
  };
});
