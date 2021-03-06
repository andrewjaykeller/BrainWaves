// Webpack entry point for the second Viewer renderer process
const ipcChannel = require("electron").ipcRenderer;
const EEGGraph = require("./components/ViewerComponent/EEGViewer");

let graph = {};
ipcChannel.on("initGraph", (event, message) => {
  graph = new EEGGraph(document.getElementById("graph"), message);
});
ipcChannel.on("newData", (event, message) => {
  graph.updateData(message);
});
ipcChannel.on("zoomIn", event => {
  graph.zoomOut();
});
ipcChannel.on("zoomOut", event => {
  graph.zoomIn();
});
ipcChannel.on("updateChannels", (event, message) => {
  graph.updateChannels(message);
});
ipcChannel.on("updateDomain", (event, message) => {
  graph.updateDomain(message);
});
ipcChannel.on("updateDownsampling", (event, message) => {
  graph.updateDownsampling(message);
});
ipcChannel.on("autoScale", (event, message) => {
  graph.autoScale();
});
