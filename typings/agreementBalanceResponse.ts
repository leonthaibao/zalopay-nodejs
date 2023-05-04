import { AgreementBalanceResponseDataInner } from './agreementBalanceResponseDataInner';

export class AgreementBalanceResponse {
            /**
            * Return codes: 1: Success, otherwise fail
            */
        'return_code'?: number;
        'return_message'?: string;
            /**
            * 
            */
        'sub_return_code'?: number;
        'sub_return_message'?: string;
        'data'?: Array<AgreementBalanceResponseDataInner>;
            /**
            * \"The discount amount of the best user\'s voucher for merchant\'s order If discount_amount == 0 that means user has no voucher can apply for current order.\"
            */
        'discount_amount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "return_code",
            "baseName": "return_code",
            "type": "number"
        },
        {
            "name": "return_message",
            "baseName": "return_message",
            "type": "string"
        },
        {
            "name": "sub_return_code",
            "baseName": "sub_return_code",
            "type": "number"
        },
        {
            "name": "sub_return_message",
            "baseName": "sub_return_message",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AgreementBalanceResponseDataInner>"
        },
        {
            "name": "discount_amount",
            "baseName": "discount_amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AgreementBalanceResponse.attributeTypeMap;
    }
}

