import Resource from "../resource";
import Service from "../../service";

class OrderResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            endpoint
        );
    }
}

export default OrderResource;