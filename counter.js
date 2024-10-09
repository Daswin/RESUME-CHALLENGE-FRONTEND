// function myFunction(){
//     // document.getElementById("visitorCounter").innerHTML = "15"
//     document.getElementById("visitorCounter").innerHTML = fetch('https://us-central1-avid-grid-386321.cloudfunctions.net/resumechallengevisitorcounter')
//     .then(response => {
//         if (!response.ok) {
//         throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// }

// async function myFunction(){
//     try{
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
//         if(!response.ok){
//             throw new error ("Could not fetch resource");
//         }
//         const data = await response.json()
//         console.log('Data received:', data);
//         // document.getElementById("visitorCounter").innerHTML = data
//     }catch(error){
//         console.error(error);
//     }
// }

const url = 'https://us-central1-avid-grid-386321.cloudfunctions.net/resumechallengevisitorcounter';

async function myFunction() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Visitor Count:', data);
    document.getElementById("visitorCounter").innerHTML = data;

  } catch (error) {
    console.error('There was a problem with the fetch operations:', error);
    document.getElementById("visitorCounter").innerHTML = "UNABLE TO DISPLAY VISTOR COUNT";
  }
}

