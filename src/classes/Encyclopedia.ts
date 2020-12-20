import { ReferenceItem } from './ReferenceItem';
import { positiveInteger } from '../decorators';

class Encyclopedia extends ReferenceItem {
    private copiess: number;

    @positiveInteger
    get copies(): number {
        return this.copiess;
    }

    set copies(value) {
        this.copiess = value;
    }
    constructor(id: number, public title: string, public year: number, public edition: number) {
        super(id, title, year);
    }
    printItem() {
        super.printItem();
        console.log(`«Edition: edition ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} and ${this.year}`);
    }
}

export default  Encyclopedia;