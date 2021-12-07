export class Customer {
    CustomerId: number;
    CompanyId: number;
    LastName: string;
    FirstName: string;
    City: string;
    Street: string;
    Zip: string;
    PhoneNumber: string;

    constructor(_CustomerId: number,_CompanyId:number, _LastName: string,_FirstName: string, _City: string,_Street: string,_Zip: string,_PhoneNumber: string) {
        this.CustomerId = _CustomerId;
        this.CompanyId = _CompanyId;
        this.LastName = _LastName;
        this.FirstName = _FirstName;
        this.City = _City;
        this.Street = _Street;
        this.Zip = _Zip;
        this.PhoneNumber = _PhoneNumber;
    }
}