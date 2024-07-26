using purchaseorder from '../db/schema';
@path: 'purchaseOrder'
service PurchaseOrderService {
    entity PurchaseOrder   as projection on purchaseorder.PurchaseOrder;
    entity PurchaseRequest as projection on purchaseorder.PurchaseRequest;
    function fetchPurchaseOrder() returns array of User;
    type Address {
        street  : String;
        suite   : String;
        city    : String;
        zipcode : String;
        geo     : GeoLocation;
    }
    type GeoLocation {
        lat : String;
        lng : String;
    }
    type Company {
        name        : String;
        catchPhrase : String;
        bs          : String;
    }
    type User {
        id       : Integer;
        name     : String;
        username : String;
        email    : String;
        address  : Address;
        phone    : String;
        website  : String;
        company  : Company;
    }
}