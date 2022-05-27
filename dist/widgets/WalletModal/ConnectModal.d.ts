import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    t: (key: string) => string;
}
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;
