export default class StackArray<T> {
    private valueArray: T[] = [];
    private size: number = 0;
    // complexity - O(1)
    push = (value: T) => {
        this.valueArray.push(value);
        this.size++;
    };
    // complexity - O(1)
    pop = (): T | null => {
        if(this.size === 0) return null;
        const value = this.valueArray[this.size - 1];
        this.valueArray.pop();
        this.size--;
        return value;
    };
    // complexity - O(1)
    top = (): T | null => {
        if(this.size === 0) return null;
        const value = this.valueArray[this.size - 1];
        return value;
    };
    // complexity - O(1)
    isEmpty = (): boolean => {
        return this.size === 0;
    };
    // complexity - O(1)
    getSize = () => {
        return this.size;
    };
}
