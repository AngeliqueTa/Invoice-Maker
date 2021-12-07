import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';
import { Company } from 'src/app/models/company.model';


@Injectable()
export class CompanyService {

    constructor(private http: Http) {
    }

    getCompany(companyID: number) {
        return this.http.get('/api/company/getCompany/companyID/' + companyID)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateCompanyDetails(company: Company) {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "application/json");
        let opts: RequestOptionsArgs = {headers: headers};
        return this.http.post('/api/company/updateCompany', JSON.stringify(company), opts)
            .map((response: Response) => {
                return response.json();
            });
    }
}