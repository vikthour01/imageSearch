import axios from "axios"

//axios is responsible for the api request
export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID e0dp_vYc1f-5J1Vp72-hACtE04kB7RTzyqL5iJWNpko"
    } 
})