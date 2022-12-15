<template>
    <div>
        <label>
            Template
         </label>
        <select @change="doSomething($event)">
            <option value="text1">
                {{text1}}
            </option>
            <option value="text2">
                {{text2}}
            </option>
        </select>
    </div>
</template>
<script>
export default{
    name:"TDropDown",
    props:{
        text1: String,
        text2: String,
        fun1: Function,
        fun2: Function
    },
    data(){
        return {
            

        }
    },
    methods:{
        doSomething(x){
            const y = x.target.value;
            if (y === 'text1'){
                this.$emit('fun1');
            }
            else{
                this.$emit('fun2');
            }
            
        }
    }
}

</script>
<style>
#but1{
    
    color:white;
    background-color: rgba(21, 24, 184, 0.408);

}
#but2{
    color:black;
    background-color: brown;
}
</style>