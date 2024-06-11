import { required } from 'yargs'

const mongoose=require('mongoose')


const staffSchema=new mongoose({
    name:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true
    },
    specialization:{
        type:String,
        required:true,
        enum:["Haircut Specialist","HairColor specialist",]
    },
    gender:{
        trype:String,
        required:true,
        enum:["Male","Female","Other"]
     },
     moblieNumber:{
        type:Number,
        required:true,
        unique:true,
     },

     dateOfjoing:{
        typeof:Date,
        required:true,
     }


},{timestamps:true})



export const Staff= mongoose.Model('Staff',staffSchema)