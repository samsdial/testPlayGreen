import React, {FC,SVGProps, useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import Home from "./icons/Home";
import History from "./icons/History";
import SingOut from "./icons/SignOut";
import {AuthContext} from "../context/auth-context";

interface NavigationProps extends SVGProps<SVGSVGElement> {
    theme?: string;
}

const Navigation: FC<NavigationProps> = ({theme}) => {
    const location = useLocation();
    const { currentUser, signOut } = useContext(AuthContext)

    let homeFill = 'gray';
    let historyFill = 'gray';

    if (location.pathname === '/home'){
        if (theme === 'dark'){
            homeFill = 'white';
        } else {
            homeFill = 'blue';
        }
    } else if (location.pathname === '/history'){
        if (theme === 'dark'){
            historyFill = 'white';
        } else {
            historyFill = 'blue';
        }
    }

    return (
        <div className="navbar-fixed">
            <div className="navbar-content">
                <div className="navbar">
                    <Link to="/home">
                        <div className="navbar-item">
                            <Home fill={homeFill} />
                        </div>
                    </Link>
                    <Link to="/history">
                    <div className="navbar-item">
                        <History fill={historyFill} />
                    </div>
                    </Link>
                    <div className="navbar-item" onClick={signOut}>
                        <SingOut fill={"gray"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navigation