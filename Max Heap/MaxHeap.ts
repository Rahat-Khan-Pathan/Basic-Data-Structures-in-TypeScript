export default class MaxHeap<T> {
    private valueArray: T[] = [];
    // complexity - O(logN)
    push = (value: T) => {
        this.valueArray.push(value);
        let curIdx = this.valueArray.length -1;
        while(curIdx !== 0) {
            const parIdx = (curIdx - 1) / 2;
            if (this.valueArray[parIdx] < this.valueArray[curIdx]) {
                [this.valueArray[parIdx], this.valueArray[curIdx]] = [this.valueArray[curIdx], this.valueArray[parIdx]];
            }
            else {
                break;
            }
            curIdx = parIdx;
        }
    } 
    // complexity - O(logN)
    pop = ()=> {
        this.valueArray[0] = this.valueArray[this.valueArray.length - 1];
        this.valueArray.pop();
        let cur = 0;
        while (true)
        {
            let left_idx = cur * 2 + 1;
            let right_idx = cur * 2 + 2;
            let last_idx = this.valueArray.length - 1;
            if (left_idx <= last_idx && right_idx <= last_idx)
            {
                if (this.valueArray[left_idx] >= this.valueArray[right_idx] && this.valueArray[left_idx] > this.valueArray[cur])
                {
                    [this.valueArray[left_idx], this.valueArray[cur]] = [this.valueArray[cur], this.valueArray[left_idx]];
                    cur = left_idx;
                }
                else if (this.valueArray[right_idx] >= this.valueArray[left_idx] && this.valueArray[right_idx] > this.valueArray[cur])
                {
                    [this.valueArray[right_idx], this.valueArray[cur]] = [this.valueArray[cur], this.valueArray[right_idx]];
                    cur = right_idx;
                }
                else
                {
                    break;
                }
            }
            else if (left_idx <= last_idx)
            {
                // left ase
                if (this.valueArray[left_idx] > this.valueArray[cur])
                {
                    [this.valueArray[left_idx], this.valueArray[cur]] = [this.valueArray[cur], this.valueArray[left_idx]];
                    cur = left_idx;
                }
                else
                {
                    break;
                }
            }
            else
            {
                break;
            }
        }
    }
    // complexity - O(1)
    top = (): T | null => {
        if(this.valueArray.length === 0) return null;
        return this.valueArray[0];
    }
}