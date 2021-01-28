import { Connector } from './Connector';

export class BluetoothConnector implements Connector {

    public doConnect(): boolean{
        console.log("Connecting via Bluetooth");
        console.log("Pair with PIN");
        console.log("Connected");
        return true
    }

}