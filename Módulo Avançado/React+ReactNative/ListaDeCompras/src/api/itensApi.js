import axios from "axios";
import apiConfig from "../config/apiConfig.json";

const itensApi = axios.create({
    baseURL: apiConfig.connectionUrl
});

export default itensApi;
