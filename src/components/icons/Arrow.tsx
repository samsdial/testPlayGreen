import * as React from "react"
import { SVGProps } from "react"
interface Props extends SVGProps<SVGSVGElement> {
    fill?: string;
}
const Arrow: FC<Props> = ({ fill, ...props }) => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320.02 256.02"
            width="1.9em"
            height="1.9em"
            {...props}
        >
            <path
                d="M54.88 144.12c1.63 1.71 2.54 2.71 3.49 3.66 26.51 26.52 53.01 53.05 79.56 79.53 3.71 3.7 6.14 7.84 5.89 13.24-.28 6.15-3.13 10.78-8.55 13.56-5.55 2.85-11.13 2.48-16.35-.98-1.54-1.02-2.87-2.41-4.19-3.73C78.75 213.44 42.77 177.47 6.8 141.49c-9.06-9.07-9.06-17.57 0-26.63C43.12 78.55 79.46 42.24 115.76 5.89c4.66-4.67 9.93-7.06 16.57-5.31 11.13 2.93 15.64 15.98 8.64 25.1-1.13 1.48-2.5 2.79-3.82 4.12-26.24 26.26-52.49 52.51-78.74 78.76-.96.96-1.87 1.96-3.53 3.7h5.07c80.37 0 160.74 0 241.12.02 2.48 0 5.06-.01 7.43.62 7.75 2.07 12.34 9.3 11.41 17.51-.84 7.44-7.24 13.28-15.03 13.66-1.62.08-3.25.05-4.87.05H54.89Z"
                fill={fill}
            />
        </svg>
    );
}

export default Arrow
