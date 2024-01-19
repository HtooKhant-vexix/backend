export default {
  port: 9000,
  host: "localhost",
  dbUrl: "mongodb://detpos:asdffdsa@192.168.0.100/local-pos?authSource=admin",
  // dbUrl: "mongodb://htookhant:asdffdsa@127.0.0.1:27017/local-pos?authSource=admin",
  saltWorkFactor: 10,
  secretKey: "suuhh",
  page_limit: 50,
  mqttUrl: "ws://192.168.0.100:9001",
  //mqttUrl: "ws://127.0.0.1:9001",
  // mqttUrl: "mqtt://192.168.0.10:1883",
  //  mqttUrl: "mqtt://192.168.0.100:1883",

  mqttUserName: "detpos",
  mqttPassword: "asdffdsa",
  // serverUrl: "https://detfsmm.com",
  // detailsaleCloudUrl: "https://detfsmm.com/api/detail-sale", htookhant
  //coustomerCloudUrl: "http://detfsmm.com:9000/api/customer",
  // coustomerCloudUrl: "https://detfsmm.com/api/customer/local-create",
  // debtCloudUrl: "https://detfsmm.com/api/debt/local-create",
};
