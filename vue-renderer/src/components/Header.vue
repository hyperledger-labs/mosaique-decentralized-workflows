<template>
    <div>
        <div>
         {{text1}}
         {{text2}}
        </div>
    </div>
    </template>
    <script>
    import json from "./DisplayObjects.json"
    export default {
        name:'Header',
        props:["text1", "text2"],
    
        data(){
            return {
                 
            }
        
        },
        methods:{
            rend(){
                this.message = Array(this.op).map((item,i)=>{
                const k = Object.keys(item)
                k.map((item2,i2)=>{
                    const p = (item[item2])
                    Object.keys(p).map((kk,ii)=>{
                        const message = p[kk].text;
                        console.log(message)
                    })
                })
            });
            }
        },
        
    }
        
    
    </script>
    <style>
    .hi{
        color: black;
    }
    </style>