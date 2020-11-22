export class RandomTableValueService {
    constructor() { /* */ }

    public getTables(): number[][][] {
        const result = [];
        const tablesCount = this._randomInteger(3, 10);

        for (let index = 0; index < tablesCount; index++) {
            result.push(this.getData());
        }

        return result;
    }

    public getData(): number[][] {
        const arrLength = this._randomInteger(3, 10);
        const innerArrLength = this._randomInteger(5, 10);
        const result: number[][] = [];
        for (let index = 0; index < arrLength; index++) {
            const element = result[index];
            const innerArr = [];
            for (let indexInner = 0; indexInner < innerArrLength; indexInner++) {
                innerArr.push(this._randomInteger(1, 100));
            }
            result.push(innerArr);
        }
        return result;
    }

    private _randomInteger(min, max): number {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}