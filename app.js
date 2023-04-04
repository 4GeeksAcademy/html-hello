window.onload = () => {
    document.querySelector("#the-excuse").innerHTML = getRandomExcuse; 
};
    let whoToBlame = ["My pet", "My mom's car", "My shower", "My neighbor"];
    let whatTheyDid = ["forgot", "ate", "destoryed", "come", "threw", "yelled"];
    let whatToAvoid = ["my homework", "your handbag", "the cable", "my test", "the appointment", "the party"];
    let where = ["yesterday", "at the department store", "in the gymnasium", "in my room","on the grocery store", "earlier today"];

let getRandomExcuse =
    whoToBlame[Math.floor(Math.random() * whoToBlame.length)] + " " + whatTheyDid[Math.floor(Math.random() * whatTheyDid.length)] + " " + whatToAvoid[Math.floor(Math.random() * whatToAvoid.length)] + " " + where[Math.floor(Math.random() * where.length)];