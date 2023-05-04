
export class AgreementQueryResponseData {
            /**
            * The app id of the merchant.
            */
        'app_id'?: number;
            /**
            * The merchant\'s unique id for the binding.
            */
        'app_trans_id'?: string;
            /**
            * The id of binding has been confirmed in the ZaloPay system.
            */
        'binding_id'?: string;
            /**
            * The public token is used when doing auto-debit.
            */
        'pay_token'?: string;
            /**
            * Server timestamp in seconds.
            */
        'server_time'?: number;
            /**
            * The identifier field in bind request.
            */
        'merchant_user_id'?: string;
            /**
            * 1: Confirmed, 3: Cancelled, 4: Disabled
            */
        'status'?: number;
            /**
            * Type of message:   1: The user confirms an agreement   2: The user updates the agreement
            */
        'msg_type'?: number;
            /**
            * The identifier of ZaloPay user per merchant app_id.
            */
        'zp_user_id'?: string;
            /**
            * Masked user phone (Ex: masked_user_phone: \"****6938\")
            */
        'masked_user_phone'?: string;

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
            "name": "binding_id",
            "baseName": "binding_id",
            "type": "string"
        },
        {
            "name": "pay_token",
            "baseName": "pay_token",
            "type": "string"
        },
        {
            "name": "server_time",
            "baseName": "server_time",
            "type": "number"
        },
        {
            "name": "merchant_user_id",
            "baseName": "merchant_user_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "msg_type",
            "baseName": "msg_type",
            "type": "number"
        },
        {
            "name": "zp_user_id",
            "baseName": "zp_user_id",
            "type": "string"
        },
        {
            "name": "masked_user_phone",
            "baseName": "masked_user_phone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AgreementQueryResponseData.attributeTypeMap;
    }
}

