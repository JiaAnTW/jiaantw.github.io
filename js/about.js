const data=[
    {
        image:"./images/project/nckutrans/header.png",
        topic:"成大轉系生心得平台",
        mainSkillIcon:"./images/project/nckutrans/skill.svg",
        skill:['React.js','Laravel','MySQL',"Google API"],
        mainSkillColor:"currentColor"
    },
    {
        image:"./images/project/invAccount/header.jpg",
        topic:"電子發票記帳App",
        mainSkillIcon:"./images/project/invAccount/skill.svg",
        skill:['Android Studio','Java','Node.js'],
        mainSkillColor:"darkcyan"
    },
    {
        image:"./images/project/maskMap/header.png",
        topic:"口罩地圖",
        mainSkillIcon:"./images/project/maskMap/skill.png",
        skill:['JQuery','Boostrap','Leaflet API'],
        mainSkillColor:"white"
    },    
    {
        image:"./images/project/swr/header.png",
        topic:"無人餐廳點餐系統",
        mainSkillIcon:"./images/project/swr/skill.svg",
        skill:['Vue.js','Node.js','MySQL','LinePay API'],
        mainSkillColor:"darkseagreen"
    },
];


let container=document.getElementById("project-container");
data.forEach((item)=>{
    new Card(container,item);
})


