// 이건 아예 못품

function solution(numServer, logs) {
		var answer = [0, 0]
    let roundRobinTime = 0;
    let leastConnectionTime = 0;
    let roundRobinServers = new Array(numServer).fill(0);
    let leastConnectionServers = new Array(numServer).fill(0);

    logs.forEach(log => {
        const [timestamp, processingTime] = log.split(' ');
        const time = parseFloat(processingTime);
        
        // Round Robin
        const idxRoundRobin = roundRobinTime % numServer;
        roundRobinServers[idxRoundRobin] += time;
        roundRobinTime += time;
        
        // Least Connection
        const idxLeastConnection = leastConnectionServers.indexOf(Math.min(...leastConnectionServers));
        leastConnectionServers[idxLeastConnection] += time;
        leastConnectionTime += time;
    });
		console.log("roundRobinTime", roundRobinTime)
		console.log("leastConnectionTime", leastConnectionTime)
		console.log("roundRobinServers", roundRobinServers)
		console.log("leastConnectionServers", leastConnectionServers)

    const roundRobinAvg = roundRobinTime / numServer;
    const leastConnectionAvg = leastConnectionTime / numServer;

    answer = [roundRobinAvg, leastConnectionAvg];
		return answer;
}

console.log(solution(2, [
    "12:00:00.100 0.400",
    "12:00:00.200 0.500",
    "12:00:00.300 0.100",
    "12:00:00.400 0.600",
    "12:00:00.500 0.200",
    "12:00:00.600 0.400",
])); // [2, 400]
