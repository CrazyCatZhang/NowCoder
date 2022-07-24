/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */

/**
 *
 * @param intervals Interval类一维数组
 * @return Interval类一维数组
 */
function merge(intervals) {
    // write code here
    if (intervals.length === 0) return []
    intervals.sort((a, b) => a.start - b.start);
    const result = []
    let start = intervals[0].start, end = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start > end) {
            result.push(new Interval(start, end))
            start = intervals[i].start
            end = intervals[i].end
        } else {
            end = Math.max(end, intervals[i].end)
        }
    }
    result.push(new Interval(start, end))
    return result
}

module.exports = {
    merge: merge
};