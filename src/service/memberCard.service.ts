import fMsg, { mqttEmitter } from "../utils/helper";
import { client } from "../utils/connect";
import memberCardModel from "../model/memberCard.model";
export const membercardRead = async(msg)=>{
    console.log("-----")
    console.log(msg)
    console.log("-----")

    const data = await memberCardModel.findOne({nfc_id: msg})
    // const data = await memberCardModel.find()

    console.log(data)
    if (data) {
        const message = {
		con: "true",
            email: data.email,
            password: '111111',
            nfc_id: data.nfc_id
        };
        const jsonString = JSON.stringify(message);

        console.log(message)

        client.publish("detpos/local_server/rfid", jsonString, (err) => {
            if (err) {
                console.error("Error publishing message:", err);
            } else {
                console.log("Message published successfully");
            }
        });
    }else{
        client.publish("detpos/local_server/rfid", JSON.stringify({
            "con": "false",
            "msg": "no"}));
    }

}


