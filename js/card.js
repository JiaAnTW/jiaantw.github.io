function Card(container,content){
    let icon=document.createElement("div");
    icon.style.backgroundImage='url("'+content.mainSkillIcon+'")';
    icon.style.backgroundColor=content.mainSkillColor;
    icon.setAttribute("class","card-icon");

    let image=document.createElement("div");
    image.style.backgroundImage='url("'+content.image+'")';
    image.setAttribute("class","card-img");
    image.appendChild(icon);

    let topic=document.createElement("h5");
    topic.textContent=content.topic;
    let outerBox=document.createElement("div");
    outerBox.setAttribute("class","card");
    outerBox.appendChild(image);
    outerBox.appendChild(topic);
    container.appendChild(outerBox);
}