export class Invoice {
    InvoiceId: number;
    CustomerID: number;
    DateOfInvoice: Date;
    DueDate: Date;
    TotalAmount: number;

    constructor(_InvoiceId: number, _CustomerID: number, _DateOfInvoice: Date, _DueDate: Date, _TotalAmount : number
        ) {
        this.InvoiceId = _InvoiceId;
        this.CustomerID = _CustomerID;
        this.DateOfInvoice = _DateOfInvoice;
        this.DueDate = _DueDate;
        this.TotalAmount = _TotalAmount
    }
}