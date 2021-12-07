import { Component } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { InvoiceItemService } from 'src/app/services/items.service';
import { Company } from 'src/app/models/company.model';
import { Items } from 'src/app/models/items.model';
import { Customer } from 'src/app/models/customer.model';
import { Invoice } from 'src/app/models/invoice.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companylist: Array<Company>;
  customerlist: Array<Customer>;
  invoicelist: Array<Invoice>;
  invoiceitemslist: Array<Items>;
  companyId: number;
  customerId: number;
  invoiceID: number;

  constructor(
    private companyService: CompanyService,
    private customerService: CustomerService,
    private invoiceService: InvoiceService,
    private invoiceItemService: InvoiceItemService,
    private alertService: AlertService,
  ){}

  public ngOnInit() {
    this.loadCompany();
    this.loadCustomer();
    this.loadInvoice();
    this.loadInvoiceITems();
}
  
  loadCompany() {
    this.companylist = new Array<Company>();

    this.companyService.getCompany(this.companyId).subscribe(
        data => {
            for(let CompanyData of data) {
              this.companyId = CompanyData.CompanyID;
                this.companylist.push(new Company(CompanyData.CompanyID,CompanyData.CompanyName,CompanyData.City,CompanyData.Steet,CompanyData.Zip,CompanyData.PhoneNumber,CompanyData.Fax,CompanyData.Website ));
            }
        },
        error => {
            this.alertService.error(error);
        }
    )
}

loadCustomer() {
  this.customerlist = new Array<Customer>();

  this.customerService.getCustomer(this.companyId).subscribe(
      data => {
          for(let customerData of data) {
            this.customerId = customerData.CustomerID;
              this.customerlist.push(new Customer(customerData.CustomerID, customerData.CompanyID,customerData.LastName, customerData.FirstName,customerData.City,customerData.Steet,customerData.Zip,customerData.PhoneNumber));
          }
      },
      error => {
          this.alertService.error(error);
      }
  )
}

loadInvoice() {
  this.invoicelist = new Array<Invoice>();

  this.invoiceService.getInvoice(this.customerId).subscribe(
      data => {
          for(let invoiceData of data) {
            this.invoiceID = invoiceData.InvoiceId;
              this.invoicelist.push(new Invoice(invoiceData.InvoiceId, invoiceData.customerId, invoiceData.DateOfInvoice,invoiceData.DueDate,invoiceData.TotalAmount));
          }
      },
      error => {
          this.alertService.error(error);
      }
  )
}

loadInvoiceITems() {
  this.invoiceitemslist = new Array<Items>();

  this.invoiceItemService.getInvoiceItem(this.invoiceID).subscribe(
      data => {
          for(let itemData of data) {
              this.invoiceitemslist.push(new Items(itemData.ItemID, itemData.ItemDescription, itemData.Price, itemData.isTaxable));
          }
      },
      error => {
          this.alertService.error(error);
      }
  )
}

saveStoreChanges(company: Company, customer: Customer, invoice:Invoice, invoiceItems: Items) {
  this.companyService.updateCompanyDetails(company);
  this.customerService.updateCustomerDetails(customer);
  this.invoiceService.updateInvoiceDetails(invoice);
  this.invoiceItemService.updateInvoiceItemDetails(invoiceItems);
}

}
