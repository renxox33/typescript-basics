interface InterfacePet {
    readonly name: string; //private, protected modifiers cannot be used in interfaces
    age?: number //? is used to mark a property as optional
    quality: () => void;
}

class Kitten implements InterfacePet {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    quality() {
        console.log(`${this.name} flies sometimes`);
    }
};

const ginger = new Kitten("Momo");
ginger.quality();