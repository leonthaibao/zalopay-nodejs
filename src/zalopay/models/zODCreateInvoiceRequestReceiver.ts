/*
* The version of the ZaloPay OpenAPI document: v1.0.0
* Contact: developer@zalopay.vn
*
* NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
* https://openapi-generator.tech
* Do not edit this class manually.
*/

/**
* Receiver information
*/
export class ZodCreateInvoiceRequestReceiver {
  /**
  * Receiver name
  */
  "contact"?: string;


  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "contact",
      "baseName": "contact",
      "type": "string"
    }  ];

  static getAttributeTypeMap() {
    return ZodCreateInvoiceRequestReceiver.attributeTypeMap;
  }
}

