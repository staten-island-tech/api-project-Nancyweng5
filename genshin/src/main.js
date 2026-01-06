import "./style.css";
const URL = "https://genshin.jmp.blue";
function inject(characters){
    const genshindata = document.querySelector(".api-response");
    genshindata.insertAdjacentHTML("beforeend",
        `<div class = "genshindata">
            <h3 class = "name">Name: ${characters.name}</h3>
            <h3 class = "title">Title: ${characters.title}</h3>
            <h3 class = "vision">Vision: ${characters.vision}</h3>
            <h3 class = "weapon">Weapon: ${characters.weapon}</h3>
            <h3 class = "gender">Gender: ${characters.gender}</h3>
            <h3 class = "nation">Nation : ${characters.nation}</h3>
            <h3 class = "affiliation">Affiliation: ${characters.affiliation}</h3>
            <h3 class = "rarity">Rarity: ${characters.rarity}</h3>
        </div>`
    )
 }

async function getData(){
    try{
        const response = await fetch(`${URL}/characters`);
        if (response.status != 200){
            throw new Error(response)
        } else {
            const characterdata = await response.json()
            console.log(characterdata)
            for (let name of characterdata){
                const charactername = await fetch(`${URL}/characters/${name}`)
                const data = await charactername.json();
                inject(data);
                }
        }
    } catch(error){
        console.log(error);
    }
    }
getData();

function searchbar(){
    const input = document.querySelector(".searchcharacterbyname")
    const container = document.querySelector(".api-response")
    const btn = document.querySelector(".btn")
    btn.addEventListener("click", function (event) {
        const name =input.value.trim()
        container.innerHTML = "";
        if (name === ""){
            container.innerHTML = "<p>Please enter a character name</p>"
            return;
        }
        try{
            const response = await fetch(`${URL}/characters`);
            if (response.status != 200)
                container.innerHTML = `<p>Character "${name}" not found`
        }
    })
}
searchbar()