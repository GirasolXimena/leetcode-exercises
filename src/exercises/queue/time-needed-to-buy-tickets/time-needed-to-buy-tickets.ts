function timeRequiredToBuyOnm(tickets: number[], k: number): number {
    let timer = 0;
    let stack: number[] = [];

    for (let i = 0; i < tickets.length; i++) {
        stack.push(i)
    }

    while (tickets[k] > 0) {
        const currentCustomerIdx = stack.shift();
        if(currentCustomerIdx === undefined)break;
        tickets[currentCustomerIdx]--;
        timer++;

        if (tickets[currentCustomerIdx] > 0) {
            stack.push(currentCustomerIdx)
        }
    }
    return timer
}; 

export function timeRequiredToBuy(tickets: number[], k: number): number {
    return tickets.reduce((timer, current, i) => {
        // we will only ever sell as many tickets as k person
        // since after they are done we don't care anymore about
        // keeping track
        let sellableTickets = tickets[k];

        if (k < i) {
            // if person i comes after  person k
            // they will go through line 1 fewer time
            // because we stop caring the moment tickets[k] hits 0
            sellableTickets--;
        }

        // if person i wants fewer tickets
        // than person k we will sell all their tickets
        if (current < sellableTickets) {
            sellableTickets = current
        }

        // add 1 sec for each ticket actually bought
        timer += sellableTickets

        return timer
    }, 0)
};