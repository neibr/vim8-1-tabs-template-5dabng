export class Tab {
    public index: number;
    public active: boolean = false;

    constructor(index: number, active: boolean = false) {
        this.index = index;
        this.active = active;
    }
}
