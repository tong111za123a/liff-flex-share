const express = require("express");
const line = require("@line/bot-sdk");

const app = express();
app.use(express.json());

const config = {
  channelAccessToken: "m5ZxJYwkf9H5dVJZGy0D2ziXOOaC2yEeCIdPRgko9MfR7IrbY1nRDV5lbV8c8P55yHdj/BeP1ImehAILo02pfjsxmW4J6/Bkjih+Rj5317zHrT1efuIr/rQj1G8emzx+D+jDiVTqkXx+POl0ZeQlcQdB04t89/1O/w1cDnyilFU=", // ⬅ ใส่ token ของคุณตรงนี้
  channelSecret: "35a6a2d44ea8301d9fa6f3bf503434ec"
};

const client = new line.Client(config);

async function notify(profile) {
  const msg = {
    type: "text",
    text: `📢 มีคนขอเพิ่ม whitelist!\n👤 ชื่อ: ${profile.displayName}\n🆔 userId: ${profile.userId}`
  };
  await client.pushMessage("cbf750437c1414acc072cf55327918882", msg);
}

app.post("/whitelist-request", async (req, res) => {
  await notify(req.body);
  res.send({ ok: true });
});

app.listen(3000, () => console.log("Server running on port 3000"));