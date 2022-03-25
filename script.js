window.onload = perso_display;
let data;
window.addEventListener("DOMContentLoaded", (event) => {
    loader = document.getElementById("inwait");
    loader.classList.add("none");
});


const colorSelect = document.getElementsByClassName("colorSelect")[0];
colorSelect.addEventListener("click",function(event) {
    const main = document.getElementById("main");
    if (colorSelect.classList.contains("light")) {
        colorSelect.classList.remove("light");
        colorSelect.classList.add("night");
        main.style.background = "#333"

    } else {
        main.style.background = "#fff"
        colorSelect.classList.remove("night");
        colorSelect.classList.add("light");
    }
},false)




const logo = document.getElementById("logo")[0];
logo.addEventListener("click",function(event) {
    if (logo.classList.contains("menu")) {
        logo.classList.remove("menu");
    } else {
        logo.classList.add("menu");
    }
},false)


function filter(info) {
    personnages = document.getElementsByClassName("perso");
    divs = document.querySelectorAll("#main div");
    if (info != "all") {
        filter("all");
        elements_need = data["elements"][info];
        let a;
        for (let i = 0; i < personnages.length; i++) {
            a = true
            for (let u = 0; u < elements_need.length; u++) {
                if (personnages[i].getAttribute("alt") == elements_need[u]) {
                    a = false;
                }
            }
            if (a) {
                personnages[i].classList.add("none")
                divs[i].classList.add("none")
            }
            
        }
    } else {
        for (let i = 0; i < personnages.length; i++) {
            if (personnages[i].classList.contains("none")) {
                personnages[i].classList.remove("none");
                divs[i].classList.remove("none");
            }
        }
    }
        
}


function perso_display() {
    const persos = document.getElementsByClassName("perso");
    for (let i = 0; i < persos.length;i++) {
        let name = persos[i].dataset['name']; 
        persos[i].setAttribute("src",`https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_${name}.png`)
    }
    const elements = document.getElementsByClassName("element");
    for (let l = 0; l < 6; l++) {
        elements[l].addEventListener("click", function(event) {
            let a = false;
            if (elements[l].classList.contains("actived")) {
                a = true;
            }
            for (let o = 0; o < 6; o++) {
                if (elements[o].classList.contains("actived")) {
                    elements[o].classList.remove("actived");
                }
            }
            if (!a) {
                elements[l].classList.add("actived");
                const info = elements[l].getAttribute("alt");
                filter(info)
            } else {
                filter("all")
            }
            
        }, false)
    }
    getText();
    newA();
}





function newA() {
    let base = document.getElementsByClassName("div_perso");
    for (let i = 0; i < base.length; i++) {
        base[i].addEventListener("mouseover", function(event) {
            let perso_name = event.target.getAttribute("alt");
            let newA = document.createElement("a")
            newA.setAttribute("href","#");
            newA.classList.add("perso_name");
            newA.innerText = perso_name;
            base[i].append(newA);
        })
        base[i].addEventListener("mouseout", function(event) {
            let perso_name = document.getElementsByClassName("perso_name")[0];
            perso_name.remove();
        })
        base[i].addEventListener("click", function(event) {
            ;
            let perso_name = event.target.getAttribute("alt");
            if (perso_name != null) {
                let name = event.target.dataset['name']; 
                window.scrollTo(0, 0)
                let newD = document.createElement("div");
                newD.classList.add("one_perso");
                let body = document.getElementsByTagName("body")[0];
                body.append(newD);
                body.classList.add("blur");
                let newD2 = document.createElement("div");
                newD2.innerText = "X"
                newD2.classList.add("back");
                body.append(newD2);
                let img = document.createElement("img");
                img.setAttribute("src",`https://upload-os-bbs.mihoyo.com/game_record/genshin/character_image/UI_AvatarIcon_${name}@2x.png`)
                img.classList.add("solo_img");
                body.append(img);
                let newD3 = document.createElement("div");
                newD3.innerText = perso_name;
                newD3.classList.add("peso_solo_name");
                body.append(newD3);
                let div_art = document.createElement("div");
                div_art.classList.add("art_list");
                perso_data = data["artefact"][perso_name];
                console.log(perso_data);
                order = [4,2,5,1,3];
                for (let u = 1; u < 6; u++) {
                    console.log(perso_data[u]);
                    let div_art_solo  = document.createElement("div");
                    div_art_solo.classList.add("art_solo");
                    let art_img = document.createElement("img");
                    art_img.setAttribute("src",`https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_${perso_data[u-1].id}_${order[u-1]}.png`)
                    art_img.classList.add("img_art");
                    art_img.classList.add("l");
                    div_art_solo.append(art_img);
                    div_stats = document.createElement("div");
                    div_stats.classList.add("stats");
                    title = document.createElement("h3");
                    title.innerText = perso_data[u-1].name;
                    let stats_all = document.createElement("p");
                    stats_all.classList.add("stats_all");
                    stats_all.innerText = perso_data[u-1]["data-lore"]
                    let set = document.createElement("p");
                    set.classList.add("set");
                    set.innerText =  perso_data[u-1]["data-title"];
                    for (let m = 0 ; m < 4 ; m++) {
                        arte_stat = document.createElement("p");
                        arte_stat.classList.add("art_stats");
                        arte_stat.innerText = perso_data[u-1]["data"][m];
                        div_stats.append(arte_stat);
                    }                    
                    div_stats.append(set);            
                    div_stats.append(stats_all);
                    div_stats.append(title);             
                    div_art_solo.append(div_stats);
                    /**end */
                    div_embed = document.createElement("div");
                    div_embed.classList.add("embed");
                    div_art_solo.append(div_embed);
                    div_art.append(div_art_solo);
                }
                body.append(div_art);
                let div_elev_perso = document.createElement("div");
                div_elev_perso.classList.add("elev_p");
                body.append(div_elev_perso);
                newD2.addEventListener("click", function(event) {
                    newD.remove();
                    newD2.remove();
                    img.remove();
                    newD3.remove();
                    div_elev_perso.remove();
                    div_art.remove();
                    body.classList.remove("blur");
                })
            }
        })
    }
}



function getText() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data_perso = this.responseText
        let datad = JSON.parse(data_perso);
        data = datad;
        console.log("data load");
      }
    };
    xhttp.open("GET", "./data.json", true);
    xhttp.send();
  }

