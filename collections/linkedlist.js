var _ = require("underscore");


_.LinkedNode = function(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
}

_.LinkedNode.prototype.toString = function () {
    return "["+this.val.toString()+"]"
}

_.LinkedList = function (array) {
    array = array || []
    this.head = this.tail = null;
    this.length = 0;
    for(var i=0; i<array.length; i++){
        this.append(new _.LinkedNode(array[i]));
    }

}

_.LinkedList.prototype.append = function (linode) {
    if(this.head === null){
        this.head = this.tail = linode;
        return
    }
    this.tail.next = linode;
    linode.prev = this.tail;
    this.tail = linode
}

_.LinkedList.prototype.preappend = function (linode) {
    linode.next = this.head;
    this.head.prev = linode;
    this.head = linode;
}

_.LinkedList.prototype.delete_by_node = function (linode) {
    if(linode.prev){
        if(this.tail === linode){
            this.tail = linode.prev
        }
        linode.prev.next = linode.next
    }else{
        // mean this is head
        if(this.tail === linode){
            this.tail = null
        }
        this.head = linode.next;
    }
}

_.LinkedList.prototype.find = function (val) {
    var cursor = this.head;
    while(cursor !== null){
        if(cursor.val === val){
            return cursor
        }
        cursor = cursor.next;
    }
}

_.LinkedList.prototype.toString = function (linode) {
    var r = [];
    var cursor = this.head;
    while(cursor && cursor.next){
        r.push(cursor.toString());
        if(cursor.next && cursor.next.prev){
            r.push(" <-> ")
        }else if(cursor.next && !cursor.next.prev){
            r.push(" |-> ")
        }else{
            r.push(" --- ")
        }
        cursor = cursor.next
    }

    if(cursor){
        r.push(cursor.toString())
    }

    return r.join("")
}
















