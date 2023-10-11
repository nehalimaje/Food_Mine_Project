const mongoose = require("mongoose");
import {connect, ConnectOptions} from 'mongoose';


export const dbConnect = () => {
    connect("mongodb://0.0.0.0:27017/food_mine", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}