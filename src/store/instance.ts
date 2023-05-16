import axios from "axios";

//https://www.thesportsdb.com/api/v1/json/60130162/all_sports.php
const API_URL = "https://authpaygreen-default-rtdb.firebaseio.com";
export default  axios.create({
    baseURL: API_URL
})
