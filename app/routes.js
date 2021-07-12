const express = require("express");
const router = express.Router();

const controller = require('./controller');
console.log("yoo2");
router.post("/api/save-call-id", controller.saveCallId);
router.get("/api/get-call-id/:id", controller.getCallId);

module.exports = router;