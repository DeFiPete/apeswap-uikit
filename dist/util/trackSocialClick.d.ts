export interface TrackProps {
    event: string;
    chain: number | undefined | string;
    data: any;
    value?: number | string;
}
export declare type TrackHandler = ({ ...arg }: TrackProps) => void;
export interface SocialClickProps {
    tracker: TrackHandler | undefined;
    socialName: string;
    position: string;
    clickUrl: string;
    chainId: number | string;
}
declare const trackSocialClick: (tracker: SocialClickProps["tracker"], socialName: SocialClickProps["socialName"], position: SocialClickProps["position"], clickUrl: SocialClickProps["clickUrl"], chainId: SocialClickProps["chainId"]) => void;
export default trackSocialClick;
