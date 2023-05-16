import * as React from "react"
import { SVGProps } from "react"
import Heart from "./icons/Heart";
import Closed from "./icons/Closed";
import cn from 'classnames'
import styled from 'styled-components'
interface ListProps extends SVGProps<SVGSVGElement> {
    name?: string;
    image?: string;
    theme?: string;
    className?: string;
}
const ListHistoryUnstyled: FC<ListProps> = ({ name, image, state, theme, className }) => {
    const classes = cn(className, 'list-history')
    console.log(theme);
    return(
        <div className={classes}>
            <div className="full">
                <figure className="effect">
                    <img src={image} alt={name}/>
                    <figcaption>
                        <h2 className="header">
                            {name}
                        </h2>
                    </figcaption>
                </figure>

            </div>
            <div className="flex-shrink">
                {state ? <Heart fill={theme === 'dark' ? "white": "blue"} /> : <Closed fill={"red"} />}
            </div>
        </div>
    );
}


const ListHistory = styled(ListHistoryUnstyled)`
  display: flex;
  border-radius: 22px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  > .full {
    width: 90%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 75px;
    display: flex;
    justify-content: left;
    align-items: center;
    figure.effect {
      background: linear-gradient(to bottom, rgb(37, 141, 200) 0%, rgb(0, 0, 0) 100%);
      position: relative;
      float: left;
      overflow: hidden;
      margin: 10px 1%;
      width: 100%;
      max-height: 77px;
      cursor: pointer;
      border-radius: 22px;
      figcaption {
        padding: 1em;
        text-align: left;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      img {
        max-width: none;
        width: calc(100% + 60px);
        transition: opacity 0.35s, transform 0.35s;
        transform: translate3d(-50px, 0,0);
        position: relative;
        display: block;
        max-height: 100%;
        opacity: 0.5;
      }
      &:hover img {
        opacity: 0.7;
        transform: translate3d(0,0,0);
      }
    }
  }
  > .flex-shrink {
        width: 19%;
        flex-shrink: 1;
        display: flex;
        justify-content: center;
        align-items: center;
  }
`
export default ListHistory
