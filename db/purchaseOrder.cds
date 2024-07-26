namespace purchaseorder;

entity PurchaseOrder {
    key purchaseOrderId: UUID;
    orderDate: Date;
    status: String;
    purchaseRequest: Association to PurchaseRequest;
}

entity PurchaseRequest {
    key purchaseRequestId: UUID;
    requestDate: Date;
    requesterName: String;
}