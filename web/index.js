
var KnowledgeGraph = document.getElementById("knowledge-graph");

var LevitatedSphere = document.getElementById("levitated-sphere"); 

var border = document.getElementById("levitated-sphere-border");

// console.log(border.id)

var isView = false;

LevitatedSphere.onclick = function(){
    isView = !isView;
    if(isView){
        KnowledgeGraph.style.visibility = "visible";
    }
    else{
        KnowledgeGraph.style.visibility = "hidden";
    }
}


// LevitatedSphere.addEventListener('click' , function(){
//     // console.log(border.parentNode)
//     border.animate(
//         [
//             {
//                 transform : "translateZ(0)"
//             },
//             {
//                 transform : "translateZ(50px)"
//             },
//             {
//                 transform : "translateZ(0)"
//             }
//         ],
//         {
//             duration: 1000, // 持续时间
//             easing: 'linear', // 规定动画的速度曲线
//             delay: 0,// 在动画开始之前的延迟
//             iterations: 1,// 动画应该播放的次数(默认为 1)
//             // direction: "alternate", // 是否应该轮流反向播放动画
//             fill: 'forwards',// 动画是否停在最后一个关键帧
//         }
//     );
// });