import { FC } from "react";
import { LegacySvgProps } from "../../components/Svg/types";
export declare type SwitchNetwork = (chainId: number) => void;
export interface Config {
    chainId: number;
    networkName: string;
    symbol: string;
    icon: FC<LegacySvgProps>;
}
export declare type Handler = () => void;
export interface InjectedProps {
    onDismiss?: Handler;
}
