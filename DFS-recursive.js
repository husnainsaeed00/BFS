class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const depthFirstSearch=(root)=>{
    if(root===null) return [];
    const leftValues=depthFirstSearch(root.left);
    const rightValues=depthFirstSearch(root.right);
    return [root.val,...leftValues,...rightValues]
}