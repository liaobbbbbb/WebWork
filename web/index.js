
var KnowledgeGraph = document.getElementById("knowledge-graph");

var LevitatedSphere = document.getElementById("levitated-sphere"); 

// console.log(KnowledgeGraph.id)

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