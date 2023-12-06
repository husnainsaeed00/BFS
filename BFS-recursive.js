class Node {
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const breadthFirstSearch=(root)=>{
    if(root.length===0) return [];
    const leftValues=breadthFirstSearch(root.left);
    const rightValues=breadthFirstSearch(root.right);
    return [root.val,...leftValues,...rightValues]
     
}