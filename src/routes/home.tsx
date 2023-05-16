import {FC, useState, useContext, useEffect} from 'react'
import { AuthContext } from '../context/auth-context'

import { getPosts } from "../store/getPosts"
import axios from "axios";
//import 'firebase/database'

import Closed from '../components/icons/Closed'
import Light from "../components/icons/light";
import Heart from "../components/icons/Heart";
import Homes  from "../components/icons/Home";
import History from "../components/icons/History";
import SingOut from "../components/icons/SignOut";
import firebase from "firebase/compat";
import instance from "../store/instance";

const Home: FC = () => {
    const { currentUser, signOut } = useContext(AuthContext)
    const [posts, setPosts ] = useState<Post[]>([]);
    const [history, setHistory] = useState<Post[]>([])
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(()=> {
        getPosts()
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        instance.get("/results.json").then((response) => {
            console.log(response)
            const fetchedData = [];

            for (const key in response.data) {
                fetchedData.push({ ...response.data[key], id: key})
            }
            setHistory(fetchedData);
        })
    }, [])
    const handleLike = async () => {
        try {
            const currentObject = {...posts.sports[currentIndex], like: true};

            instance.post("/results.json", currentObject).then((response) =>{
               const results = [{...currentObject, id: response.data.name}]
            });
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } catch (error) {
            console.log(error);
        }
    }
    const handleUnlike = async () => {
        try {
            const currentObject = {...posts.sports[currentIndex], like: false};

            instance.post("/results.json", currentObject).then((response) =>{
                console.log(response)
                const results = [{...currentObject, id: response.data.name}]
                console.log(results)
            });
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(history)

    return(
      /**
      * Extract the currrentUser from the context, if you want to
      * get the User info, like the email, display name, etc.
       * *
      */
      <div className="container bgc-black">
          <div className="box-home">

              {posts.sports?.length > 0 && (
                 <div>

                     <div className="grid mb-47">
                         <figure >
                             <img src={posts.sports[currentIndex].strSportThumb} alt=""/>
                             <figcaption>
                                 <div className="box-icon">
                                     <Light />
                                 </div>
                                 <h2 className="subtitle">
                                     {posts.sports[currentIndex].strSport}
                                 </h2>
                             </figcaption>
                         </figure>
                     </div>
                     <div className="navbar-like">
                         <div className="navbar-like-item unlike" onClick={handleUnlike}>
                             <Closed fill={"white"} />
                         </div>
                         <div className="navbar-like-item like" onClick={handleLike}>
                             <Heart fill={"white"} />
                         </div>
                     </div>
                 </div>
              )}

              <div className="d-none">

              </div>

              <div className="navbar-fixed">
               <div className="navbar-content">
                <div className="navbar">
                    <div className="navbar-item">
                        <Homes fill={"white"} />
                    </div>
                    <div className="navbar-item">
                        <History fill={"gray"} />
                    </div>
                    <div className="navbar-item" onClick={signOut}>
                        <SingOut fill={"gray"} />
                    </div>
                </div>
               </div>
              </div>
          </div>
      </div>
    )
}
export default Home
