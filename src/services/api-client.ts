import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bb04c56466d743788a57887b765ca4f9'
    }
})