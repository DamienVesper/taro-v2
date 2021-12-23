class IgeClass {
    classID: string;

    components: any[];

    constructor (class, options) {}

    addComponent = (Component: IgeClass, options: Object): any => {
        const newComponent = new Component(this, options);
        this.components.push(newComponent);

        return this;
    };
}

export {
    IgeClass
};
