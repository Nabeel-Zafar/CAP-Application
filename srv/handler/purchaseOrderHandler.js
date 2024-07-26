const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {
    const { PurchaseOrder, PurchaseRequest } = this.entities;

    this.on('READ', PurchaseOrder, async (req) => {
        const response = await axios.get('http://localhost:3000/purchaseOrders');
        return response.data.map(order => ({
            purchaseOrderId: order.id,
            orderDate: order.date,
            status: order.status,
            purchaseRequest: order.purchaseRequestId
        }));
    });

    this.on('READ', PurchaseRequest, async (req) => {
        const response = await axios.get('http://localhost:3000/purchaseRequests');
        return response.data.map(request => ({
            purchaseRequestId: request.id,
            requestDate: request.date,
            requesterName: request.requesterName
        }));
    });
});
