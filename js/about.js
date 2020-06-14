const data=[
    {
        image:"./images/project/nckutrans/header.png",
        topic:"成大轉系生心得平台",
        mainSkillIcon:"./images/project/nckutrans/skill.svg",
        mainSkillColor:"#61dafb"
    },
    {
        image:"./images/project/invAccount/header.jpg",
        topic:"電子發票記帳App",
        mainSkillIcon:"./images/project/invAccount/skill.svg",
        mainSkillColor:"#61dafb"
    },
    {
        image:"./images/project/maskMap/header.png",
        topic:"口罩地圖",
        mainSkillIcon:"./images/project/maskMap/skill.png",
        mainSkillColor:"#61dafb"
    },
];


let container=document.getElementById("project-container");
data.forEach((item)=>{
    new Card(container,item);
})


