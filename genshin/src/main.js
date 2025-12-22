async function getData(genshin){
    try{
        //go get datat]
        const response = await fetch(`https://genshin.jmp.blue/${genshin}`);
        //handle errors
        if (response.status != 200){
            throw new Error(response)
        } else {
            //makes the resoponse into json data we can use
            const data = await response.json()
            console.log(data);
            document.getElementById("api-response").textContent =
            `Name: ${data.name}
            Vision: ${data.vision}
            Weapon: ${data.weapon}
            Rarity: ${data.rarity}`;
        }
    } catch(error){
        console.log(error);
    }
    }
getData("characters/amber");