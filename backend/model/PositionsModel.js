const { model } = require("mongoose");

const { PositionsSchema }= require("../schemas/PositionsSchema");

const HoldingsModel = new model("position", PositionsSchema);

module.exports= {PositionsModel};
