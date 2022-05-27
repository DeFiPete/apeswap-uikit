import React from "react";
import { SwitchNetwork } from "./types";
interface Props {
    switchNetwork: SwitchNetwork;
    chainId: number;
    t: (key: string) => string;
    onDismiss?: () => void;
}
declare const SelectNetworkModal: React.FC<Props>;
export default SelectNetworkModal;
