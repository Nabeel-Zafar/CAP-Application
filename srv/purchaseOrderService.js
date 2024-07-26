const cds = require("@sap/cds");
const axios = require('axios');


module.exports = cds.service.impl(async function () {
  const { PurchaseOrder, PurchaseRequest } = this.entities;

  this.on("fetchPurchaseOrder", async (req) => {
    const options = {
      method: "GET",
    };
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  });

  this.on("READ", PurchaseRequest, async (req) => {
    const response = await axios.get("http://localhost:3000/purchaseRequests");
    return response.data.map((request) => ({
      purchaseRequestId: request.id,
      requestDate: request.date,
      requesterName: request.requesterName,
    }));
  });
});