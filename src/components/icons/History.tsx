import * as React from "react"
import { SVGProps } from "react"
interface Props extends SVGProps<SVGSVGElement> {
    fill?: string;
}
const History: FC<Props> = ({ fill, ...props }) => {
    return(
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="none"
        >
            <path
                fill={fill}
                d="M9.5.125A9.375 9.375 0 1 0 18.875 9.5 9.385 9.385 0 0 0 9.5.125Zm4.42 6.06-3.867 3.867a.782.782 0 0 1-1.105-1.104l3.867-3.867a.782.782 0 0 1 1.104 1.104Z"
            />
        </svg>
    );
}

export default History


