
export class AgreementBindRequest {
            /**
            * The unique ID of the application will be provided after the merchant registered successfully with ZaloPay.
            */
        'app_id': number;
            /**
            * Unique transaction ID of application, format: yyMMddxxxxxxxxx. Max length is 40. For example: 180208181007242
            */
        'app_trans_id': string;
            /**
            * The timestamp that order was created at in ms. The different limit is 15 minutes.
            */
        'req_date': number;
            /**
            * Maximum permissible amount. The default is real balance.
            */
        'max_amount'?: number;
            /**
            * \"URL of merchant binding page(web), be used in the desktop binding scenario. After the binding process finished, ZaloPay auto-debit binding page will redirect to merchant binding page via redirect URL with the binding result.\"
            */
        'redirect_url'?: string;
            /**
            * \"The deep-link of merchant app, be used in the mobile binding  scenario. After the binding process finished, ZaloPay app  will open the merchant app via redirect deep link with the  binding result.\"
            */
        'redirect_deep_link'?: string;
            /**
            * JSON string contain binding information, describe which information user will agree to allow merchant to do, using confirmation binding.
            */
        'binding_data'?: string;
            /**
            * This field specify which type of binding, currently only WALLET is allowed. Default is WALLET if not provided
            */
        'binding_type'?: AgreementBindRequest.BindingTypeEnum;
            /**
            * TBD
            */
        'callback_url'?: string;
            /**
            * User\'s identifier on merchant system, it can be merchant user\'s id, phone number, email...
            */
        'identifier': string;
            /**
            * It is signature of request. It\'s calculated by following input: hmacinput = app_id + `|` + apps_trans_id + `|` + binding_data + `|` + binding_type + `|` + identifier + `|` + max_amount + `|` + req_date; and use sha256 with app\'s hmac key as sign key.
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
            "name": "max_amount",
            "baseName": "max_amount",
            "type": "number"
        },
        {
            "name": "redirect_url",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "redirect_deep_link",
            "baseName": "redirect_deep_link",
            "type": "string"
        },
        {
            "name": "binding_data",
            "baseName": "binding_data",
            "type": "string"
        },
        {
            "name": "binding_type",
            "baseName": "binding_type",
            "type": "AgreementBindRequest.BindingTypeEnum"
        },
        {
            "name": "callback_url",
            "baseName": "callback_url",
            "type": "string"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "mac",
            "baseName": "mac",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AgreementBindRequest.attributeTypeMap;
    }
}

export namespace AgreementBindRequest {
    export enum BindingTypeEnum {
        Wallet = 'WALLET'
    }
}
