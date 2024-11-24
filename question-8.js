// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function fetchFromWeb() {
    try {
        const answerFromWeb = await fetch('https://jsonplaceholder.typicode.com/users');
        //console.log(answerFromWeb);
        //returned objects with alot of information 
        const jasonAnswer = await answerFromWeb.json();
        //convert object to javascript object we use await to ensure that it does not execute until promise resolves  answerFromWeb object
        const usersName = jasonAnswer.map(user => user.name);
        // use map to filter only user name
        return usersName;
    } catch (error) {
        return error;
    }
 }
 
fetchFromWeb().then((repsonse)=>console.log(response));
// we use .then to display the result. 