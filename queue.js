// function addToQueue(runTask) {
//   // addToQueue runs when the 'Queue it up!' button is clicked.

//   // ...

//   // Call runTask when the task is ready to start.
//   runTask(function() {
//     // The function passed to runTask will run when the task is done.

//     // ...
//   });
// }

var isFulfilled = true;
var taskQueue = [];

function addToQueue(runTask) {
    // addToQueue runs when the 'Queue it up!' button is clicked.
    console.log('hello');

    taskQueue.push(runTask);

    if (isFulfilled) {
        executeNextTask();
    }
}

function executeNextTask() {
    // Check if there are tasks in the queue
    if (taskQueue.length > 0) {
        // Set isFulfilled to false to indicate that a task is running
        isFulfilled = false;

        // Get the first task from the queue
        var nextTask = taskQueue.shift();

        // Execute the task
        nextTask(() => {
            console.log('callback is here');
            isFulfilled = true; // Mark task completion
            executeNextTask(); // Execute the next task in the queue
        });
    }
}