const bst=new Bst();
bst.insert(7);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(9);
console.log(bst);
bst.remove(7);
console.log(bst)
bst.preorder(bst.getRootNode());
console.log(bst.search(bst.root,2));