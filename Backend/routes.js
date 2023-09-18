const router = require("express").Router();

router.post("/emailQR", (req, res) => {
  const data = req.body;
  const string = `MATMSG:TO:${data.emailID};SUB:${data.subject};BODY:${data.body};;`;
  res.send(string);
});

router.post("/wifiQR", (req, res) => {
  const data = req.body;
  const string = `WIFI:T:${data.encryption};S:${data.wifiID};P: ${data.password};H:${data.hidden};`;
  res.send(string);
});

router.post("/vCardQR", (req, res) => {
  const data = req.body;
  const string = `BEGIN:VCARD
  VERSION:3.0
  N:${data.sname};${data.fname}
  FN:${data.fname} ${data.sname}
  ORG:${data.company}
  TITLE:${data.role}
  ADR:;;${data.address};${data.city};${data.zip};${data.state};${data.country}
  TEL;CELL:${data.phone}
  TEL;FAX:${data.fax} 
  EMAIL;WORK;INTERNET:${data.email}
  URL:${data.website}
  Note:${data.note} 
  END:VCARD
  `;
  res.send(string);
});

router.post("/bitcoinQR", (req, res) => {
  const data = req.body;
  const string = `${data.crypto}:${data.type}?amount=${data.amount}&message=${data.message}`;
  res.send(string);
});

module.exports = router;
