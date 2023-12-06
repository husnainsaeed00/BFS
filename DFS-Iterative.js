class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

const depthFirstSearch=(root)=>{
    if(root===null) return [];
    let result=[];
    const stack=[root];
    while(stack.length>0){
        const current=stack.pop();
        result.push(current.val);

        if(current.right) return stack.push(current.right);
        if(current.left) return stack.push(current.left);
    }
    return result;
}