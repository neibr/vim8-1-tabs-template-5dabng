export class Tab {
    public index;
    public title: string;
    public content: string;
    public active = false;

    constructor(index, title: string, content: string, active = false) {
        this.index = index;
        this.title = title;
        this.content = content;
        this.active = active;
    }
}
