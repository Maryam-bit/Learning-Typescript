// generic classes

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            this.data.splice(this.data.indexOf(item), 1)
        }
    }
    
    getItems() {
        return [...this.data]
    }
}1

const textStorage = new DataStorage<string>();
textStorage.addItem("Max")
textStorage.addItem("Manu")
textStorage.removeItem("Max")
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();
