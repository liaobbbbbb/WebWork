
var KnowledgeGraph = document.getElementById("knowledge-graph");

var LevitatedSphere = document.getElementById("levitated-sphere"); 

// console.log(KnowledgeGraph.id)

var isView = false;

LevitatedSphere.onclick = function(){
    isView = !isView;
    if(isView){
        KnowledgeGraph.style.display = "block";
    }
    else{
        KnowledgeGraph.style.display = "none";
    }
}