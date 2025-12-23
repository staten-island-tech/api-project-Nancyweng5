const genshin = "`https://genshin.jmp.blue/"
function inject(items){
    const genshindata = document.querySelector(".api-response");
    genshindata.insertAdjacentHTML("beforeend",
        `<div class = genshindata>
            <h3>Name: ${items.name}</h3>
            <h3>Title: ${items.title}</h3>
            <h3>Vision: ${items.vision}</h3>
            <h3>Weapon: ${items.weapon}</h3>
            <h3>Gender: ${items.gender}</h3>
            <h3>Nation : ${items.nation}</h3>
            <h3>Affiliation: ${items.affiliation}</h3>
            <h3>Rarity: ${items.rarity}</h3>
        </div>`
    )
}
async functi         on getData(genshin){
    try{
        //go get data]
        const response = await fetch(genshin);
        //handle errors
        if (response.status != 200){
            throw new Error(response)
        } else {
            //makes the resoponse into json data we can use
            const data = await response.json()
            console.log(data);
            data.entries.forEach(inject)
        }
    } catch(error){
        console.log(error);
    }
    }
getData(genshin);