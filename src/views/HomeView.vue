<template >
<div class="tout">
    <h2>{{ numero }}</h2>
    <div class="pave">
       <button @click="enterNum('1')">1</button>
       <button @click="enterNum('2')">2</button>
       <button @click="enterNum('3')">3</button>
    </div>
    <div class="pavo">
       <button @click="enterNum('4')">4</button>
       <button @click="enterNum('5')">5</button>
       <button @click="enterNum('6')">6</button>
    </div>
    <div class="pavi">
       <button @click="enterNum('7')">7</button>
       <button @click="enterNum('8')">8</button>
       <button @click="enterNum('9')">9</button>
    </div>
    <div class="pavu">
       <button @click="enterNum('0')">0</button>
    </div>
    <button type="submit">Appelez</button>
    <button @click="effacerNum()">Effacer</button>
</div>  
</template>
<script>
export default {
    data(){
       return {
        numero:""
       } 
    },
    methods:{
    enterNum(num) {
      this.numero+=num
    },
    effacerNum() {
      this.numero =""
    }
 },
}
</script>
<style>
    
</style>