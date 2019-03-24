export class Tab {
    public index;
    public active = false;

    constructor(index, active = false) {
        this.index = index;
        this.active = active;
    }
}
