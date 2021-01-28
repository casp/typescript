import { BluetoothConnector } from './BluetoothConnector';
import { System } from './System';
import { WifiConnector } from './WifiConnector';

const wifi = new WifiConnector();
const system = new System(new WifiConnector());
console.log("-------------------------");
const system1 = new System(new BluetoothConnector());

