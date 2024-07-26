using purchaseorder from '../db/schema';

service PurchaseOrderService {
    entity PurchaseOrder as projection on purchaseorder.PurchaseOrder;
    entity PurchaseRequest as projection on purchaseorder.PurchaseRequest;
}
