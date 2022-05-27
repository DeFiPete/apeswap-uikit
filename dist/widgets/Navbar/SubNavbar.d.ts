import React from "react";
import { MenuSubEntry } from "./types";
import { TrackHandler } from "../../util/trackSocialClick";
interface SubNavbarProps {
    items: MenuSubEntry[];
    image?: string;
    label: string;
    isDark: boolean;
    chainId: number | string;
    track?: TrackHandler | undefined;
}
declare const SubNavbar: React.FC<SubNavbarProps>;
export default SubNavbar;
