import mongoose from "mongoose";
import { Schema } from "mongoose";

const memberCardSchema = new Schema(
    {
        nfc_id: { type: String, require: true,unique: true},
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        phone: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        address: { type: String, require: true },
        salary: { type: Number, require: true },
        role: { type: String, require: true },
        dob: { type: String, require: true },
        gender: { type: String, require: true },
        joiningDate: { type: String, require: true },
    }
);
const memberCardModel = mongoose.model("memberCard", memberCardSchema);

export default memberCardModel