import axios from "axios";

const launchesService = axios.create({baseURL: 'https://api.spacexdata.com/v3/launches/'});

export {launchesService};