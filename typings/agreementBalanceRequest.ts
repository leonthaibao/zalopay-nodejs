
export class AgreementBalanceRequest {
            /**
            * The unique ID of the application will be provided after the merchant registered successfully with ZaloPay.
            */
        'app_id': number;
            /**
            * The user\'s identifier on the merchant system,it can be a merchant user\'s id, phone, number, email...
            */
        'identifier': string;
            /**
            * The public token of the payer.
            */
        'pay_token': string;
            /**
            * Current timestamp in milliseconds.
            */
        'req_date': number;
            /**
            * Payment amount.
            */
        'amount': number;
            /**
            * It is signature of request. It\'s calculated by following input: hmacinput = app_id + `|` + pay_token + `|` + identifier + `|` + amount + `|` + req_date; and use sha256 with app\'s hmac key as sign key.
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
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "pay_token",
            "baseName": "pay_token",
            "type": "string"
        },
        {
            "name": "req_date",
            "baseName": "req_date",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "mac",
            "baseName": "mac",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AgreementBalanceRequest.attributeTypeMap;
    }
}

