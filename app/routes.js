const express = require("express");
const router = express.Router();

const controller = require('./controller');

//Save the call Id to the redis database
router.post("/api/save-call-id", controller.saveCallId);

//Id taken from frontend will be passed to the controller function getCallId
router.get("/api/get-call-id/:id", controller.getCallId);

module.exports = router;