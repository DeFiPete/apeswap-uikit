import React from "react";
import { LegacySvgProps } from "../../../components/Svg/types";
interface LogoProps extends LegacySvgProps {
    isDark: boolean;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
