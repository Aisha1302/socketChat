
import mongoose from 'mongoose';

export const connection = () => {

    mongoose.connect(process.env.CONNECTION_URL).then(() => {
        console.log("DB connected");
    }).catch((err) => {
        console.log("err", err);
    })

}

