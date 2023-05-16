import * as React from "react"
import { SVGProps } from "react"
interface Props extends SVGProps<SVGSVGElement> {
    fill?: string;
}
const Closed: FC<Props> = ({ fill, ...props }) => {
    console.log('', props);
    return(
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
        >
            <path
                fill={fill}
                fillRule="evenodd"
                d="M.999.999a1.534 1.534 0 0 1 2.17 0l4.699 4.7 4.7-4.7a1.534 1.534 0 0 1 2.169 2.169l-4.7 4.7 4.7 4.7a1.534 1.534 0 0 1-2.17 2.169l-4.699-4.7-4.7 4.7a1.534 1.534 0 1 1-2.17-2.17l4.7-4.7-4.7-4.699a1.534 1.534 0 0 1 0-2.17Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default Closed
