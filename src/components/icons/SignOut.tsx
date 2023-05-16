import * as React from "react"
import { SVGProps } from "react"
interface Props extends SVGProps<SVGSVGElement> {
    fill?: string;
}
const SingOut: FC<Props> = ({ fill, ...props }) => {
    return(
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            fill="none"
        >
            <path
                fill={fill}
                d="M15.708 4.292 14.24 5.76l2.687 2.698H6.333v2.084h10.594l-2.687 2.687 1.468 1.48L20.917 9.5l-5.209-5.208ZM2.167 2.208H10.5V.125H2.167A2.09 2.09 0 0 0 .083 2.208v14.584a2.09 2.09 0 0 0 2.084 2.083H10.5v-2.083H2.167V2.208Z"
            />
        </svg>
    );
}

export default SingOut