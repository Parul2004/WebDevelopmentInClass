// this is url or endPoint --> https://api.github.com/users
// collection of endPoints --> called API

const url = "https://api.github.com/users";

 
// console.log(fetch(url));
// Promises will be the output

fetch(url).then((response)=>{
    // console.log(response);
    const dataPromise = response.json(); // ---> this will return promise
    console.log(dataPromise);
    
    return dataPromise;

}).then((data) => {
    console.log(data);
})