window.onload = perso_display;
let data;
let perso_name_of_class = "perso_name";
let actived = "actived";


function loaded() {
    loader = document.getElementById("inwait");
    loader.classList.add("none");
    load = document.getElementById("loader");
    load.classList.add("none");
    body = document.getElementsByTagName("body")[0];
    body.classList.remove("blur");
}


const colorSelect = document.getElementsByClassName("colorSelect")[0];
colorSelect.addEventListener("click",function(event) {
    const main = document.getElementById("main");
    const element = document.getElementsByClassName("elements")[0];
    const logo = document.getElementById("logo");
    const header = document.querySelector("header");
    const input = document.querySelector("header input");
    const menu = document.getElementsByClassName("menu")[0];
    const loader = document.getElementById("inwait");
    if (colorSelect.classList.contains("light")) {
        colorSelect.classList.remove("light");
        colorSelect.classList.add("night");
        loader.classList.remove("none");
        loader.classList.add("dark");
        main.classList.add("main");
        element.classList.add("elements_b");
        header.classList.add("main");
        logo.style.color = "#fff";
        input.classList.add("bg_26");
        perso_name_of_class = "perso_name_b";
        menu.classList.add("main");
        menu.classList.add("menu_n");
        actived = "actived_w";

    } else {
        loader.classList.add("none");
        loader.classList.remove("dark");
        menu.classList.remove("menu_n");
        menu.classList.remove("main");
        perso_name_of_class = "perso_name";
        logo.style.color = "#000";
        element.classList.remove("elements_b");
        main.classList.remove("main");
        input.classList.remove("bg_26");
        header.classList.remove("main");
        colorSelect.classList.remove("night");
        colorSelect.classList.add("light");
        actived = "actived";
    }
})

function recherche(e) {
    personnages = document.getElementsByClassName("perso");
    divs = document.querySelectorAll("#main div");
    let a;
    for (let i = 0; i < personnages.length; i++) {
        if (personnages[i].classList.contains("notin")) {
            personnages[i].classList.remove("notin");
            divs[i].classList.remove("notin");
        }
        a = true
        if (personnages[i].getAttribute("alt").toLowerCase().search(e.toLowerCase()) != -1) {
            a = false;
        }
        if (a) {
            personnages[i].classList.add("notin");
            divs[i].classList.add("notin");
        }
            
    }
}

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
    for (let l = 0; l < 7; l++) {
        elements[l].addEventListener("click", function(event) {
            let a = false;
            if (elements[l].classList.contains(actived)) {
                a = true;
            }
            for (let o = 0; o < 7; o++) {
                if (elements[o].classList.contains(actived)) {
                    elements[o].classList.remove(actived);
                }
            }
            if (!a) {
                elements[l].classList.add(actived);
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


function getElement(pseudo) {
    let element = ["geo","electro","anemo","feu","glace","eau","dendro"];
    for (let i = 0; i < element.length ; i++) {
        for (let u = 0; u < data["elements"][element[i]].length ; u++) {
            if (data["elements"][element[i]][u] == pseudo) {
                return element[i];
            }
        }
    }
    
}




function newA() {
    let base = document.getElementsByClassName("div_perso");
    for (let i = 0; i < base.length; i++) {
        base[i].addEventListener("mouseover", function(event) {
            let perso_name = event.target.getAttribute("alt");
            let newA = document.createElement("a")
            newA.setAttribute("href","#");
            newA.classList.add(perso_name_of_class);
            newA.innerText = perso_name;
            base[i].append(newA);
        })
        base[i].addEventListener("mouseout", function(event) {
            let perso_name = document.getElementsByClassName(perso_name_of_class)[0];
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

                let img2 = document.createElement("img");
                img2.setAttribute("src",`https://upload-os-bbs.mihoyo.com/game_record/genshin/character_image/UI_AvatarIcon_${name}@2x.png`)
                img2.classList.add("solo_img");
                body.append(img);

                let img3 = document.createElement("img");
                img3.setAttribute("src",`https://upload-os-bbs.mihoyo.com/game_record/genshin/character_image/UI_AvatarIcon_${name}@2x.png`)
                img3.classList.add("solo_img");
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
                    let div_art_solo  = document.createElement("div");
                    div_art_solo.classList.add("art_solo");
                    let art_img = document.createElement("img");
                    art_img.setAttribute("src",`https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_${perso_data[u-1].id}_${order[u-1]}.png`);
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

                /**====== */

                let div_elev_perso = document.createElement("div");
                div_elev_perso.classList.add("elev_p");
                const element = getElement(perso_name);
                let element_perso = document.createElement("img");
                element_perso.setAttribute("src",`./elements/${element}.png`)
                element_perso.setAttribute("id","img_elem");
                let elev_perso = document.createElement("p");
                elev_perso.innerText = "Elevation Personnage";
                elev_perso.classList.add("title_assen");
                perso_elev = data.Elevation[perso_name]["perso"];
                for( let o = 0; o < 4; o++) {                    
                    let div_img = document.createElement("div");
                    div_img.classList.add("item_elev");
                    let img_of_div = document.createElement("img");
                    let name_of_item = data.Elevation.Main.perso;
                    img_of_div.setAttribute("src",`./items/stones/${name_of_item[perso_elev.pierre][o]}.png`);
                    let img_nb = document.createElement("p");
                    img_nb.innerText = `x${data["Elevation"]["Main"]["perso"]["nb_pierre"][o]}`;
                    div_img.append(img_of_div);
                    div_img.append(img_nb);
                    div_elev_perso.append(div_img);   
                }
                for (let n = 0; n < 3; n++) {
                    let div_img = document.createElement("div");
                    div_img.classList.add("item_elev");
                    let img_of_div = document.createElement("img");
                    let name_of_item = data.Elevation.Main.perso;
                    img_of_div.setAttribute("src",`./items/drop/${name_of_item[perso_elev.mob_drop][n]}.png`);
                    let img_nb = document.createElement("p");
                    img_nb.innerText = `x${data["Elevation"]["Main"]["perso"]["nb_mob_drop"][n]}`;
                    div_img.append(img_of_div);
                    div_img.append(img_nb);
                    div_elev_perso.append(div_img); 
                }
                let div_img = document.createElement("div");
                    div_img.classList.add("item_elev");
                    let img_of_div = document.createElement("img");
                    img_of_div.setAttribute("src",`./items/boss/${perso_elev.boss}.png`);
                    let img_nb = document.createElement("p");
                    img_nb.innerText = `x${data["Elevation"]["Main"]["perso"]["nb_boss"]}`;
                    div_img.append(img_of_div);
                    div_img.append(img_nb);
                    div_elev_perso.append(div_img);
                let div_imgd = document.createElement("div");
                div_imgd.classList.add("item_elev");
                let img_of_divd = document.createElement("img");
                img_of_divd.setAttribute("src",`./items/fleur/${perso_elev.fleur}.png`);
                    let img_nbd = document.createElement("p");
                    img_nbd.innerText = `x${data["Elevation"]["Main"]["perso"]["nb_fleurs"]}`;
                    div_imgd.append(img_of_divd);
                    div_imgd.append(img_nbd);
                    div_elev_perso.append(div_imgd);
                let div_imga = document.createElement("div");
                div_imga.classList.add("item_elev");
                let img_of_divc = document.createElement("img");
                img_of_divc.setAttribute("src",`https://www.genshin-impact.fr/wp-content/uploads/2022/01/Mora.png`);
                    let img_nbv = document.createElement("p");
                    img_nbv.innerText = "2.093M";
                    div_imga.append(img_of_divc);
                    div_imga.append(img_nbv);
                    div_elev_perso.append(div_imga); 
                div_elev_perso.append(elev_perso);
                div_elev_perso.append(element_perso);
                
                /* ====*/

                let div_elev_comp = document.createElement("div");
                div_elev_comp.classList.add("elev_p");
                div_elev_comp.classList.add("anime_leave")
                let element_perso2 = document.createElement("img");
                element_perso2.setAttribute("src",`./elements/${element}.png`)
                element_perso2.setAttribute("id","img_elem");
                let elev_perso2 = document.createElement("p");
                elev_perso2.innerText = "Elevation Competences";
                elev_perso2.classList.add("title_assen");
                comp_elev = data.Elevation[perso_name]["comp"];
                for( let o = 0; o < 3; o++) {                    
                    let div_img1 = document.createElement("div");
                    div_img1.classList.add("item_elev");
                    let img_of_div = document.createElement("img");
                    let name_of_item = data.Elevation.Main.comp;
                    img_of_div.setAttribute("src",`./items/paper/${name_of_item[comp_elev.papier][o]}.png`);
                    let img_nb = document.createElement("p");
                    img_nb.innerText = `x${data["Elevation"]["Main"]["comp"]["paper"][o]}`;
                    div_img1.append(img_of_div);
                    div_img1.append(img_nb);
                    div_elev_comp.append(div_img1);   
                }
                for (let n = 0; n < 3; n++) {
                    let div_imge = document.createElement("div");
                    div_imge.classList.add("item_elev");
                    let img_of_div = document.createElement("img");
                    let name_of_item = data.Elevation.Main.comp;
                    img_of_div.setAttribute("src",`./items/drop/${name_of_item[comp_elev.mob_drop][n]}.png`);
                    let img_nb = document.createElement("p");
                    img_nb.innerText = `x${data["Elevation"]["Main"]["comp"]["mob"][n]}`;
                    div_imge.append(img_of_div);
                    div_imge.append(img_nb);
                    div_elev_comp.append(div_imge); 
                }
                let div_img2 = document.createElement("div");
                    div_img2.classList.add("item_elev");
                    let img_of_div2 = document.createElement("img");
                    img_of_div2.setAttribute("src",`./items/boss_heb/${comp_elev.boss_eb}.png`);
                    let img_nb1 = document.createElement("p");
                    img_nb1.innerText = `x${data["Elevation"]["Main"]["comp"]["boss_eb"]}`;
                    div_img2.append(img_of_div2);
                    div_img2.append(img_nb1);
                    div_elev_comp.append(div_img2);

                    let div_imgd1 = document.createElement("div");
                    div_imgd1.classList.add("item_elev");
                    let img_of_dive = document.createElement("img");
                    img_of_dive.setAttribute("src",`./items/boss_heb/i_491.png`);
                        let img_nbdd = document.createElement("p");
                        img_nbdd.innerText = `x3`;
                        div_imgd1.append(img_of_dive);
                        div_imgd1.append(img_nbdd);
                        div_elev_comp.append(div_imgd1);

                let div_imgda = document.createElement("div");
                div_imgda.classList.add("item_elev");
                div_elev_comp.append(elev_perso2);
                div_elev_comp.append(element_perso2);
                let img_of_divac = document.createElement("img");
                img_of_divac.setAttribute("src",`https://www.genshin-impact.fr/wp-content/uploads/2022/01/Mora.png`);
                let img_nbav = document.createElement("p");
                img_nbav.innerText = "4.95M";
                div_imgda.append(img_of_divac);
                div_imgda.append(img_nbav);
                div_elev_comp.append(div_imgda); 


                /**====== */

                body.append(div_elev_perso);
                body.append(div_elev_comp);
                let switchArrow = document.createElement("div"); 
                switchArrow.classList.add("right");
                switchArrow.addEventListener('click', function(event) {
                    if (switchArrow.classList.contains("left")) {
                        switchArrow.classList.remove("left");
                    } else {
                        switchArrow.classList.add("left");
                    }
                    if (div_elev_perso.classList.contains("anime_leave")) {
                        div_elev_perso.classList.remove("anime_leave");
                        div_elev_comp.classList.add("anime_leave");
                    } else {
                        div_elev_perso.classList.add("anime_leave");
                        div_elev_comp.classList.remove("anime_leave");
                    }
                })
                /** */
                body.append(switchArrow);
                

                newD2.addEventListener("click", function(event) {
                    switchArrow.remove();
                    newD.remove();
                    newD2.remove();
                    img.remove();
                    img2.remove();
                    img3.remove();
                    newD3.remove();
                    div_elev_perso.remove();
                    div_elev_comp.remove();
                    div_art.remove();
                    body.classList.remove("blur");
                })
            }
        })
    }
    loaded();
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

