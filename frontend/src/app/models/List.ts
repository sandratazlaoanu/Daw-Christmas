import ListElement from './ListElement';

export default class List {
    name: string;
    listElements: ListElement[];

    constructor(name: string) {
        this.name = name;
    }
    
}