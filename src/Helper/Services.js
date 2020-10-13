const axios = require('axios');
const config = require('../Config/Config.json');

const endpoint = config.endpoint;

export const getMovies = async () => {
    try {
        let { data } = await axios({
            method: "get",
            url: `${endpoint}/movie/getAll`,
        });
        return data;
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}


export const addMovie = async (movie) => {
    try {
        let data = await axios({
            method: "post",
            url: `${endpoint}/movie/insert`,
            data: movie,
        });
        return data;
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}


export const editMovie = async (id, data) => {
    try {
        await axios({
            method: "patch",
            url: `${endpoint}/movie/update/${id}`,
            data: data,
        });
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const deleteMovie = async (id, data) => {
    try {
        await axios({
            method: "delete",
            url: `${endpoint}/movie/delete/${id}`,
        });
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}