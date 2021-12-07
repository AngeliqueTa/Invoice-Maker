import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';
import { Invoice } from 'src/app/models/invoice.model';


@Injectable()
export class InvoiceService {

    constructor(private http: Http) {
    }

    getInvoice(customerID: number) {
        return this.http.get('/api/invoice/getInvoice/customerID/' + customerID)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateInvoiceDetails(invoice: Invoice) {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "application/json");
        let opts: RequestOptionsArgs = {headers: headers};
        return this.http.post('/api/invoice/updateInvoice', JSON.stringify(invoice), opts)
            .map((response: Response) => {
                return response.json();
            });
    }
}