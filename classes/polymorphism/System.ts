import { Connector } from './Connector';

export class System {
    constructor(private connector: Connector) { 
        connector.doConnect()
    }
}