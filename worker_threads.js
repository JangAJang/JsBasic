const {
  isMainThread,
  Worker,
  parentPort,
  workerData,
} = require("worker_threads");
let result = 0;
if (isMainThread) {
  // 메인스레드
  const threads = new Set();
  threads.add(new Worker(__filename), { workerData: 2 });
  threads.add(new Worker(__filename));
  for (let thread in threads) {
    thread.on("message", value);
    thread.on("exit", () => {
      if (threads.size === 0) {
        console.log(dd);
      }
    });
  }
} else {
  const data = workerData;
  parentPort.postMessage();
}
