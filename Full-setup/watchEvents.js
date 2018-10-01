"use strict";

const Web3 = require("web3");

const LOCAL_WS = "ws://localhost:8546";
let provider = new Web3.providers.WebsocketProvider(LOCAL_WS);
const web3 = new Web3(provider);

const log = (...args) => console.log(new Date(), ...args);
const error = (...args) => console.error(new Date(), ...args);

provider.on("error", error => error("WS error", error));
provider.on("end", error => {
  error("WS connection closed.");
});

const relayedOwnedSetAddress = "0x3D6f28e83e31bc475dEf77A0F01ECEDe4FBe2d22";
const from = "0x12db1ee91481573302f63ebf3d735820081c68a2";


(async () => {
  var relayedOwnedSetABI=[{"constant": true,"inputs": [],"name": "recentBlocks","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getPending","outputs": [{"name": "","type": "address[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_new","type": "address"}],"name": "setOwner","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_validator","type": "address"}],"name": "removeValidator","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_validator","type": "address"}],"name": "addValidator","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_reporter","type": "address"},{"name": "_validator","type": "address"},{"name": "_blockNumber","type": "uint256"},{"name": "_proof","type": "bytes"}],"name": "relayReportMalicious","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "finalizeChange","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_recentBlocks","type": "uint256"}],"name": "setRecentBlocks","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "owner","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "relaySet","outputs": [{"name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "finalized","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getValidators","outputs": [{"name": "","type": "address[]"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_relaySet","type": "address"}],"name": "setRelay","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "_reporter","type": "address"},{"name": "_validator","type": "address"},{"name": "_blockNumber","type": "uint256"}],"name": "relayReportBenign","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"inputs": [{"name": "_relaySet","type": "address"},{"name": "_initial","type": "address[]"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"name": "currentSet","type": "address[]"}],"name": "ChangeFinalized","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "reporter","type": "address"},{"indexed": true,"name": "reported","type": "address"},{"indexed": true,"name": "malicious","type": "bool"}],"name": "Report","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "old","type": "address"},{"indexed": true,"name": "current","type": "address"}],"name": "NewOwner","type": "event"}]
  let relayedOwnedSet = new web3.eth.Contract(relayedOwnedSetABI, relayedOwnedSetAddress);
  relayedOwnedSet.events.Report()
    .on('data', event => {
      var isMalicious = (typeof(event.malicious)=="undefined" || event.malicious )? "no" : "yes" ;
      log("Reporter: " + event.returnValues.reporter + " Reported: " + event.returnValues.reported + " Malicious: "+ isMalicious);
    })
    .on('error', error => error("Report listener error", error));
})();