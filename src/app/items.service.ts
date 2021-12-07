import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';
import { Items } from 'src/app/models/items.model';


@Injectable()
export class InvoiceItemService {

    constructor(private http: Http) {
    }

    getInvoiceItem(invoiceID: number) {
        return this.http.get('/api/invoiceitems/getItems/invoiceID/' + invoiceID)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateInvoiceItemDetails(invoiceItem: Items) {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "application/json");
        let opts: RequestOptionsArgs = {headers: headers};
        return this.http.post('/api/invoiceitems/updateInvoiceItems', JSON.stringify(invoiceItem), opts)
            .map((response: Response) => {
                return response.json();
            });
    }
}