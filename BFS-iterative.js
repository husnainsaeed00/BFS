class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const breadthFirstSearch=(root)=>{
    if(root.length===0) return [];
    const result=[];
    const queue=[root];
    while(queue.lenght>0){
        const current=queue.shift();
        result.push(current.val);
        if(current.left && current.left!==null) queue.push(current.left);
        if(current.right && current.right!==null) queue.push(current.right);
    }  
    return result 
}