import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    onDismiss?: () => void;
    t: (key: string) => string;
}
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;
