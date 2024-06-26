// importing flatbuffers
var flatbuffers = require('flatbuffers').flatbuffers;
window.flatbuffers = flatbuffers;  // making it global cuz laziness
console.log("FlatBuffers is loaded", flatbuffers);