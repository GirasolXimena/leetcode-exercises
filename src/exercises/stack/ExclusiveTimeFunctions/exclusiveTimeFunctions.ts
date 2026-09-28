function exclusiveTime(n: number, logs: string[]): number[] {
    let answer = [];
    let startStack = [];

    for (let i = 0; i < n; i++) {
        answer[i] = 0;
    }

    let currentTime = 0;
    for (let i = 0; i < logs.length; i++) {
        const currentEvent = startStack[startStack.length - 1];
        const [_id, event, timestamp] = logs[i].split(":");

        if (event === "start") {
            startStack.push(logs[i]);
        }

        if (currentEvent) {
            const ts = parseInt(timestamp);
            let dur = ts - currentTime;
            currentTime = ts;
            if (event === "end") {
                dur++;
                currentTime++;
                startStack.pop();
            }
            answer[parseInt(currentEvent.split(":")[0])] += dur;
        }
    }

    return answer;
}
