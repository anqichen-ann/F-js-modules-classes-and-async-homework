export const getPoetry = async function(){
    // let result = [];
    // return fetch('https://v1.jinrishici.com/all.json', {
    //     method: "GET",
    //     headers: {
    //       "accept": "text/html"
    //     },
    //     credentials: "same-origin"
    //   }).then( data => data.json()
    //       ).then(data => {
    //       result.push(data.origin);
    //       result.push(data.author);
    //       result.push(data.content);
    //       return result;
    // }).catch(error => 
    //     console.log(error))
    try{
        const prom1 = await fetch('https://v1.jinrishici.com/all.json');
        const data = await prom1.json();
        let result = [];
        result.push(data.origin);
        result.push(data.author);
        result.push(data.content);
        return result;
    }catch(error){
        console.log(error)
    }
}