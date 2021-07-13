const { saveCallId, getCallId } = require("./model");

//Method saves Id in redis database
exports.saveCallId = async (req, res) => {
  try {
    const { id, signalData } = req.body;
    await saveCallId(id, signalData);
    res.status(200).send(true);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

//This method will get the call information from the redis database
exports.getCallId = async (req, res) => {
  try {
    const { id } = req.params;
    const code = await getCallId(id);
    res.status(200).send({ code });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};