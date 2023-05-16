import axios from "axios";

//https://www.thesportsdb.com/api/v1/json/60130162/all_sports.php
const API_URL = "https://www.thesportsdb.com/api/v1/json/60130162";

export const getPosts = () => {
    return axios.get(`${API_URL}/all_sports.php`);
}