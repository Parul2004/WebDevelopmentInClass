// const url = "https://api.github.com/users";
function getUsers() {
    fetch(url)
         .then((response)=>{
             console.log(response);
             const dataPromise = response.json;
             return dataPromise;
    }).then((data)=>{
        console.log(data)
    }); 
}

// 'async' keyword => allows us to use 
// another keyword inside our function
// keywoed => await

const url = "https://parulSura.com";

// to deal with failure

async function getUsers2(){

    try {

        const response  =  await fetch(url);
        console.log(response);

        /*
    
        const getData = response.json();
        console.log(getData);
    
        const data = await getData;
        console.log(data);
        return data;
    
        */
    
        console.log(await response.json());

    } catch (error) {
        console.log("Fetch Failed");
        console.log(error)
    }
   
}

// getUsers();
getUsers2();

