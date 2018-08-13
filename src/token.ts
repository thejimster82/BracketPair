import TextLine from "./textLine";

export default class Token {
    public readonly type: string;
    public readonly character: string;
    public readonly depth: number;
    public readonly beginIndex: number;
    public readonly endIndex: number;
    public readonly line: TextLine;

    constructor(type: string, character: string, depth: number, beginIndex: number, endIndex: number, line: TextLine) {
        this.type = type;
        this.character = character;
        this.depth = depth;
        this.beginIndex = beginIndex;
        this.endIndex = endIndex;
        this.line = line;
    }
}
