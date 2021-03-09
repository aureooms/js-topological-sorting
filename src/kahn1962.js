/**
 * Kahn's algorithm.
 *
 * See https://en.wikipedia.org/wiki/Topological_sorting#CITEREFKahn1962
 *
 * @param {any} queue
 * @param {any} graph
 * @returns {Iterable<any>} The vertices in topological order.
 */
export default function* kahn1962(queue, graph) {
	while (true) {
		const u = queue.pop();
		if (u === undefined) break;
		yield u;
		for (const v of graph.rightOf(u)) {
			graph.delete([u, v]);
			if (graph.leftOf(v).next().done) {
				queue.push(v);
			}
		}
	}
}
