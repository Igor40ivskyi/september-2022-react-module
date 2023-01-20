const Launch = ({launch}) => {

    const {mission_name, launch_year, links: {mission_patch_small}} = launch;
    if (launch_year !== '2020') {
        console.log(launch_year);

        return (
        <div>
            <div>mission name - {mission_name}</div>
            <div>mission year - {launch_year}</div>
            <div><img src={mission_patch_small} alt={mission_name}/></div>
        </div>
    );
}}

export {Launch};