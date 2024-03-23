import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',

    params: {
        key:'b6ea5b633d614f25bb45765bc1985e1c'
    }


})