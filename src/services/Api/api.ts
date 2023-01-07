import axios from "axios";

export const Api = axios.create({
    baseURL: "https://ba7e-189-58-24-228.sa.ngrok.io",
    headers: {
        "Content-Type": "application/json",
    },
});
