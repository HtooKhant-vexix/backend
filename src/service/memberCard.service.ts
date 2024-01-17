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
        // const message = {
        //     email: data.email,
        //     password: '111111',
        //     cardID: data.rfid
        // };
        const jsonString = JSON.stringify(data);

        console.log(data)

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
            "msg": "There is no member with this card !"}));
    }

}


