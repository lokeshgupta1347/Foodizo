import mongoose from "mongoose"

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string,{
            dbName:"Foodizo"
        })

        console.log("connected to Database")
    } catch (error) {
        console.log(error)
        
    }
}

export default connectDB