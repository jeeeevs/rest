
export const getFullUrl = ({baseUrl, version})=>{
    let url = baseUrl;
    if(version){
        url+=`/${version}`;
    }
    return url;
}