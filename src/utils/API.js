import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=50&seed=seed";

export default{ 
    getUsers:function(){  
        return axios.get(BASEURL);
    }
}