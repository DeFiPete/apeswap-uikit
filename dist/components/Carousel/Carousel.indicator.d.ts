import React from "react";
interface PropTypes {
    slides: string[];
    current: number;
    updateCurrent: (index: number) => void;
}
declare const CarouselIndicator: React.FC<PropTypes>;
export default CarouselIndicator;
