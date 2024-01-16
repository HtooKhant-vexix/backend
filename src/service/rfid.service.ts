import userModel, { UserInput, UserDocument } from "../model/user.model";
import fMsg, { mqttEmitter } from "../utils/helper";
import { client } from "../utils/connect";
export const cardRead = async(msg)=>{
    console.log("-----")
    console.log(msg)
    console.log("-----")
    const data = await userModel.findOne({rfid: msg})
    console.log("............")
    console.log(data)
    console.log("............")

    if (data) {
        const message = {
            email: data.email,
            password: '111111',
            cardID: data.rfid
        };

        // Convert the message object to a JSON string before publishing
        const jsonString = JSON.stringify(message);

        // Assuming the topic is "detpos/local_server/rfid"
        client.publish("detpos/local_server/rfid", jsonString, (err) => {
            if (err) {
                console.error("Error publishing message:", err);
            } else {
                console.log("Message published successfully");
            }
        });
    }

}


