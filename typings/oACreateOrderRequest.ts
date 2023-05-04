
export class OACreateOrderRequest {
            /**
            * The unique ID of the application will be provided after the merchant registered successfully with ZaloPay.
            */
        'app_id': number;
            /**
            * The merchant ID.
            */
        'app_user': string;
            /**
            * Unique transaction ID of application, format: yyMMddxxxxxxxxx. Max length is 40. For example: 180208181007242
            */
        'app_trans_id': string;
            /**
            * The timestamp that order was created at in ms. The different limit is 15 mitnutes.
            */
        'app_time': number;
            /**
            * Amount of money will be charged.
            */
        'amount': number;
            /**
            * Optional title of order.
            */
        'title'?: string;
            /**
            * Users will see this text when they are in the confirm payment screen.
            */
        'description': string;
            /**
            * ZaloPay will use this URL to notify when the payment success. If not provided, the default app callback URL will be used.
            */
        'callback_url'?: string;
            /**
            * This URL is used for transactions on the payment gateway when a transaction completed; the user will be redirected to this URL. It\'s the responsibility of merchants to provide the correct link.
            */
        'redirect_url'?: string;
            /**
            * JSON string describes the device specification.
            */
        'device_info'?: string;
            /**
            * JSON string describes order items.
            */
        'item': string;
            /**
            * JSON string include special information of order.
            */
        'embed_data': string;
            /**
            * It is signature of order. It\'s calculated by following input: hmac_input = app_id + `|` + app_trans_id + `|` + app_user + `|` + amount + `|` + app_time + `|` + embe_data + `|` + item and use SHA256 with app\'s hmac key as sign key.
            */
        'mac': string;
            /**
            * If the order is for Agreement, this field must be AGREEMENT.
            */
        'product_code'?: OACreateOrderRequest.ProductCodeEnum;
        'bank_code'?: string;
            /**
            * User phone
            */
        'phone'?: string;
            /**
            * User email
            */
        'email'?: string;
            /**
            * User address
            */
        'address'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "app_id",
            "baseName": "app_id",
            "type": "number"
        },
        {
            "name": "app_user",
            "baseName": "app_user",
            "type": "string"
        },
        {
            "name": "app_trans_id",
            "baseName": "app_trans_id",
            "type": "string"
        },
        {
            "name": "app_time",
            "baseName": "app_time",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "callback_url",
            "baseName": "callback_url",
            "type": "string"
        },
        {
            "name": "redirect_url",
            "baseName": "redirect_url",
            "type": "string"
        },
        {
            "name": "device_info",
            "baseName": "device_info",
            "type": "string"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "string"
        },
        {
            "name": "embed_data",
            "baseName": "embed_data",
            "type": "string"
        },
        {
            "name": "mac",
            "baseName": "mac",
            "type": "string"
        },
        {
            "name": "product_code",
            "baseName": "product_code",
            "type": "OACreateOrderRequest.ProductCodeEnum"
        },
        {
            "name": "bank_code",
            "baseName": "bank_code",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OACreateOrderRequest.attributeTypeMap;
    }
}

export namespace OACreateOrderRequest {
    export enum ProductCodeEnum {
        Agreement = 'AGREEMENT'
    }
}
