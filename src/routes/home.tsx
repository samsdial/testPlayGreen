import {FC, useState, useContext, useEffect, SVGProps} from 'react'
import { AuthContext } from '../context/auth-context'

import { getPosts } from "../store/getPosts"
import Closed from '../components/icons/Closed';
import Heart from "../components/icons/Heart";
import instance from "../store/instance";

interface HomeProps extends SVGProps<SVGSVGElement> {
    theme?: string;
}
const Home: FC<HomeProps> = ({theme}) => {
    const [posts, setPosts ] = useState<Post[]>([]);
    const [history, setHistory] = useState<Post[]>([])
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(()=> {
        getPosts()
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error));
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

    return(
      <div>
          <div className="box-home">
              {posts.sports?.length > 0 && (
                 <div>
                     <div className="grid mb-47">
                         <figure >
                             <img src={posts.sports[currentIndex].strSportThumb} alt=""/>
                             <figcaption>
                                 <h2 className="subtitle">
                                     {posts.sports[currentIndex].strSport}
                                 </h2>
                             </figcaption>
                         </figure>
                     </div>
                     <div className="navbar-like">
                         <div className="navbar-like-item unlike" onClick={handleUnlike}>
                             <Closed fill={theme === 'dark'? "white": "red"} />
                         </div>
                         <div className="navbar-like-item like" onClick={handleLike}>
                             <Heart fill={"white"} />
                         </div>
                     </div>
                 </div>
              )}
          </div>
      </div>
    )
}
export default Home
