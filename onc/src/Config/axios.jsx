import axios from "axios";
const key = "605f98918fd44e56a63c4bf428a5ae2d";

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api/",
});

const getGenreList = () => axiosInstance.get(`genres?key=${key}`);
const getTags = () => axiosInstance.get(`tags?key=${key}`);
const getGames = () => axiosInstance.get(`games?key=${key}`);
const Creators = () => axiosInstance.get(`creators?key=${key}`)
const Creatorsdetalish = () => axiosInstance.get(`platforms?key=${key}`)
const PlatfromDetalish = () => axiosInstance.get(`stores?key=${key}`)
const getGamesDetalish = (id) => axiosInstance.get(`games/${id}?key=${key}`);
const getGamesvideo= (id) => axiosInstance.get(`games/${id}/movies?key=${key}`);
const gameScreenShort= (id) => axiosInstance.get(`games/${id}/screenshots?key=${key}`);
const search = (query) => axiosInstance.get(`games?search=${query}&key=${key}`);
export default {
    getGenreList ,getTags,getGames,
    getGamesDetalish,getGamesvideo,
    gameScreenShort,search,Creators,
    Creatorsdetalish,PlatfromDetalish
};
