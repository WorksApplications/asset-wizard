export default class AssetDto{
    constructor(
        id,
        code,
        name,
        brand,
        invoiceDate,
        price,
        currency,
        invoiceNumber,
        customFieldData
    ){
        this.id = id;
        this.code = code;
        this.name = name;
        this.brand = brand;
        this.invoiceDate = invoiceDate;
        this.price = price;
        this.currency = currency;
        this.invoiceNumber = invoiceNumber;
        this.customFieldData = customFieldData;
    }

}