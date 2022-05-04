const mongoose=require("mongoose");

const IncomeDetail=new mongoose.Schema({
    postedId:{
        type:String,
        required:true
    },
    paymentDate:{
        type:String,
        required:true
    },
    selfDeposite:{
        type:String,
        required:true
    },
    teamDeposite:{
        type:String,
        required:true,
    },
    totalAmt:{
        type:String,
        required:true
    },
    tds:{
        type:String,
        required:true
    },
    procesing:{
        type:String,
        default: "processing"
    },
    payAmt:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        default: "Details"
    }
});
const Income=mongoose.model("IncomeDetail",IncomeDetail);
module.exports=Income;