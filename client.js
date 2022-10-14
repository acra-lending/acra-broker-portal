export default class StrapiClient{
    constructor(){}
    /*API_URL = "http://localhost:1337/api/"*/
    async fetchData(path){
       const url = `http://localhost:1337/api/acra-broker-portal-${path}`
       const res = await fetch(url)
       const menuItems = await res.json()
        console.log(url)
      return menuItems;
    }}