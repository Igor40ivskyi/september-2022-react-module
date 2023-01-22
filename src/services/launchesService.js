import axios from "axios";

const launchesService = axios.get('https://api.spacexdata.com/v3/launches/');

export {launchesService};