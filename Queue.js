var Queue = function() {
  this.queue = [];
};

Queue.prototype.add = function (element) {
  this.queue.unshift(element);
}

Queue.prototype.remove = function () {
  this.queue.pop();
}


var queue = new Queue();
queue.add(10);
queue.add(20);
queue.add(30);
queue.remove();

debug(queue.queue);

