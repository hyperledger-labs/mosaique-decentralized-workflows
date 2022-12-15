<template>
    <div class="nav">
        <TDropDown :text1="dropDownSel1" :text2="dropDownSel2"></TDropDown>
        <TDropDown text1="Style"  text2="Style but new" ></TDropDown>
    </div>
</template>
<script>
import json from "./DisplayObjects.json"
import TDropDown from "./TDropDown.vue";
export default{
    name: "NavBar",
    components: {
        TDropDown 
    },
    data() {
        const byJson = JSON.stringify(json);
        const myJson = JSON.parse(byJson);
        return {
            byJson:JSON.stringify(json),
            myJson:JSON.parse(byJson),
            dropDownSel1:myJson[10].dropDownSelect.options[0].option.text,
            dropDownSel2:myJson[10].dropDownSelect.options[1].option.text

        };
    },
    methods: {

    }
}

</script>
<style scoped>
.nav{
    background-color: rgba(104, 51, 106, 0.476);
    display: flex;
    justify-content: space-between;
    border-style:dotted;
}
</style>