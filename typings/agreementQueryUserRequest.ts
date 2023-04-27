
export class AgreementQueryUserRequest {
    /**
    * The unique ID of the application will be provided after the merchant registered successfully with ZaloPay.
    */
    'app_id': number;
    /**
    * The access token of the user after binding success.(This is pay_token value)
    */
    'access_token'?: string;
    /**
    * Current timestamp in milliseconds.
    */
    'req_date': number;
    /**
    * It is signature of request. It\'s calculated by following input: hmacinput = app_id + `|` + access_token + `|` + req_date; and use sha256 with app\'s hmac key as sign key.
    */
    'mac': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "number"
        },
        {
            "name": "access_token",
            "baseName": "access_token",
            "type": "string"
        },
        {
            "name": "req_date",
            "baseName": "req_date",
            "type": "number"
        },
        {
            "name": "mac",
            "baseName": "mac",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AgreementQueryUserRequest.attributeTypeMap;
    }
}

