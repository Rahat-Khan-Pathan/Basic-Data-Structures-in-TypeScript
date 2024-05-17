export default class StackArray {
    private valueArray: number[] = [];
    private size: number = 0;
    // complexity - O(1)
    push = (value: number) => {
        this.valueArray.push(value);
        this.size++;
    };
    // complexity - O(1)
    pop = (): number | null => {
        if(this.size === 0) return null;
        const value = this.valueArray[this.size - 1];
        this.valueArray.pop();
        this.size--;
        return value;
    };
    // complexity - O(1)
    top = (): number | null => {
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
