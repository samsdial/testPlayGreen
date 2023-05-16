import React, {FC, useState, useEffect, SVGProps} from 'react'
import instance from "../store/instance";
import Arrow from "../components/icons/Arrow";
import ListHistory from "../components/ListHistory";
import {Link} from "react-router-dom";

interface HistoryProps extends SVGProps<SVGSVGElement> {
    theme?: string;
}

const History: FC<HistoryProps> = ({theme}) => {
    const [history, setHistory] = useState<Post[]>([])
    useEffect(() => {
        instance.get("/results.json").then((response) => {
            const fetchedData = [];

            for (const key in response.data) {
                fetchedData.push({ ...response.data[key], id: key})
            }
            setHistory(fetchedData);
        })
    }, [])

    return(
        <div className="box-home box-history">
            <div className="box-history-header">
                <div className="mb-22">
                    <Link to="/home">
                        <Arrow fill={theme === 'dark'? "white": "black"} />
                    </Link>
                </div>
                <h1 className='title mb-7'>
                    History
                </h1>
                <p className="mb-7 paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="small">16 mayo</p>
            </div>
            {history.map(item => (
                <ListHistory key={item.index} theme={theme} name={item.strSport} image={item.strSportThumb} state={item.like} />
            ))}

        </div>
    )
}
export default History
