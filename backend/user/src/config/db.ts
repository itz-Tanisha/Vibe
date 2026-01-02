import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = async () => {

    const url = process.env.MONGO_URI;

    // If no url found throw an error 
    if (!url) {
        throw new Error("MONGO_URL not defined in enviroment variables.")
    }

    try {
        await mongoose.connect(url, {
            dbName:"Vibe RealTime ChatApp"
        });

        console.log("MongoDB Connected !");
        
    }
    catch(err){
        console.log('Failed to connect to MongoDB', err);

        // Terminate the node js process immediately and mark it as failed 
        process.exit(1);
    }   

}

export default connectToDB;


