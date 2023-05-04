
export class AgreementBindResponse {
            /**
            * Return codes:  1 - SUCCESS  2 - FAIL  3 - PROCESSING  -500 - SYSTEM_ERROR  -429 - LIMIT_REQUEST_REACH  406 - ILLEGAL_STATUS  -405 - ILLEGAL_CLIENT_REQUEST  -403 - ILLEGAL_SIGNATURE_REQUEST  -402 - ILLEGAL_APP_REQUEST  -401 - ILLEGAL_DATA_REQUEST
            */
        'return_code'?: number;
        'return_message'?: string;
            /**
            * 
            */
        'sub_return_code'?: number;
        'sub_return_message'?: string;
        'binding_id'?: string;
        'binding_url'?: string;

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
            "name": "binding_id",
            "baseName": "binding_id",
            "type": "string"
        },
        {
            "name": "binding_url",
            "baseName": "binding_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AgreementBindResponse.attributeTypeMap;
    }
}

