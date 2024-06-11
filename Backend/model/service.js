import { number, required, string } from "yargs";

const mongoose= require("mongoose");

const servicesSchema=new mongoose({
    service:{
        typeof:string,
        required:true
    },

     price:{
        typeof:number,
        required:true
     },

     duration:{
        typeof:string,
        required:true
     },

     description:{
        typeof:string,
        required:true
     }


},{timestamps:true})

export const service =mongoose.model("service",servicesSchema)