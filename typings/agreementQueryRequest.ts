
export class AgreementQueryRequest {
            /**
            * The unique ID of the application will be provided after the merchant registered successfully with ZaloPay.
            */
        'app_id': number;
            /**
            * Unique transaction ID of application, format: yyMMddxxxxxxxxx. Max length is 40. For example: 180208181007242
            */
        'app_trans_id': string;
            /**
            * Current timestamp in milliseconds.
            */
        'req_date': number;
            /**
            * It is signature of request. It\'s calculated by following input: hmacinput = app_id + `|` + apps_trans_id + `|` + req_date; and use sha256 with app\'s hmac key as sign key.
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
            "name": "app_trans_id",
            "baseName": "app_trans_id",
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
        return AgreementQueryRequest.attributeTypeMap;
    }
}

