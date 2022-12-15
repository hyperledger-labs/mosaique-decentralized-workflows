<template>
    <div>
        <img v-bind:src="imag" class="med" alt="pic"/>
        
    </div>
</template>
<script>
import json from "./DisplayObjects.json"
export default {
    name:"Image",
    data(){
            const byJson = JSON.stringify(json);
            const myJson = JSON.parse(byJson);
        return {
                byJson:JSON.stringify(json),
                myJson:JSON.parse(byJson),
                imag:myJson[3].image.src

        }
    },
    methods:{
        rend(){
            console.log(this.imag);
        }
    }
}
</script>
<style scoped>
.med{
   height: 30vh;
   width: auto;
   
}
</style>