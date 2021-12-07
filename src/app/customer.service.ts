import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';
import { Customer } from 'src/app/models/customer.model';

@Injectable()
export class CustomerService {

    constructor(private http: Http) {
    }

    getCustomer(companyID: number) {
        return this.http.get('/api/customer/getCustomer/companyID/' + companyID)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateCustomerDetails(customer: Customer) {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "application/json");
        let opts: RequestOptionsArgs = {headers: headers};
        return this.http.post('/api/customer/updateCustomer', JSON.stringify(customer), opts)
            .map((response: Response) => {
                return response.json();
            });
    }
}