export class Items {
    ItemID: number;
    ItemDescription: string;
    Price: number;
    IsTaxable: boolean;

    constructor(_ItemID: number, _ItemDescription: string, _Price: number, _isTaxable: boolean) {
        this.ItemID = _ItemID;
        this.ItemDescription = _ItemDescription;
        this.Price = _Price;
        this.IsTaxable = _isTaxable;
    }
}