import "./style.css";
const genshin = "https://genshin.jmp.blue/characters"
function inject(characters){
    const genshindata = document.querySelector(".api-response");
    genshindata.insertAdjacentHTML("beforeend",
        `<div class = "genshindata">
            <h3>Name: ${characters.name}</h3>
            <h3>Title: ${characters.title}</h3>
            <h3>Vision: ${characters.vision}</h3>
            <h3>Weapon: ${characters.weapon}</h3>
            <h3>Gender: ${characters.gender}</h3>
            <h3>Nation : ${characters.nation}</h3>
            <h3>Affiliation: ${characters.affiliation}</h3>
            <h3>Rarity: ${characters.rarity}</h3>
        </div>`
    )
 }

async function getData(genshin){
    try{
        const response = await fetch(genshin);
        if (response.status != 200){
            throw new Error(response)
        } else {
            const data = await response.json()
            console.log(data);
            data.entries.forEach(inject);
        }
    } catch(error){
        console.log(error);
    }
    }
getData(genshin);

/* function searchbar({
    
})
 */
