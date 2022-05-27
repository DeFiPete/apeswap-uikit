import React from "react";
import { LiveResultProps, PanelProps, PushedProps } from "./types";
import { TrackHandler } from "../../util/trackSocialClick";
interface MobileNavMenuProps extends PanelProps, PushedProps {
    isMobile: boolean;
    isPushed: boolean;
    showMenu: boolean;
    chainId: number;
    switchNetwork: (chainId: number) => void;
    track?: TrackHandler;
    liveResult?: LiveResultProps["apiResult"];
    t: (key: string) => string;
}
declare const MobileNavMenu: React.FC<MobileNavMenuProps>;
export default MobileNavMenu;
