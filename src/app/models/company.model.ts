export class Company {
    CompanyId: number;
    CompanyName: string;
    City: string;
    Street: string;
    Zip: string;
    PhoneNumber: string;
    Fax: string;
    Website: string;

    constructor(_CompanyId: number, _CompanyName: string, _City: string,_Street: string,_Zip: string,_PhoneNumber: string, _Fax: string,_Website: string) {
        this.CompanyId = _CompanyId;
        this.CompanyName = _CompanyName;
        this.City = _City;
        this.Street = _Street;
        this.Zip = _Zip;
        this.PhoneNumber = _PhoneNumber;
        this.Fax = _Fax;
        this.Website = _Website;
    }
}