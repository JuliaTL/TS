import { Book, LibMgrCallback } from './intefaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const> [
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    let titles: string[] = [];
    titles = books.filter(book => book['category'] === category)
        .map(book => book['title']);
    return titles;
}

export function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    const amountOfBooks = books.length;
    console.log('amountOfBooks:', amountOfBooks);
    console.log(books.find(book => book['available'])['title']);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach((title: string) => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string]{
    const books = getAllBooks();
    const { title, author } = books[index] as { title: string; author: string};
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const> [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
    let result = data.reduce((acc,obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    return result;
}

export function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`$Client ${name}`);
    if(age) {
        console.log(`$Client ${name} and age ${age}`);
    }
    if(city) {
        console.log(`$Client ${name} and city ${city}`);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find((book: {id: number}) => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    // console.log(`Customer name ${customer}`);
    let titles: string[] = [];
    bookIDs.forEach(id => {
        const book = getBookByID(id);
        if(book?.available) {
            titles.push(book.title);
        }
    });
    return titles;
}

const myBooks = checkoutBooks('Ann', 1, 2, 4);

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number,  available: boolean): string[];
export function getTitles(...args: (string | number | boolean)[]): string[] {
    const books = getAllBooks();

    if(args.length === 1){
        const [arg] = args;
        if(typeof arg ==='string') {
            return books.filter((book: any) => book.author === arg).map((book: any) => book.title);
        } else if( typeof  arg === 'boolean') {
            return books.filter((book: any) => book.available === arg).map((book: any) => book.available);
        }
    } else if(args.length === 2) {
        const [id, available] = args;
        if(typeof id === 'number' && typeof  available === 'boolean') {
            return books.filter((book: any) => book.id === id && book.available === available)
                .map((book: any) => book.title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if(typeof value !== 'string') {
        throw new TypeError('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if(typeof book[prop] === 'function') {
        return book[prop]['name'];
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books');
            }
        } catch(error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(error: Error, titles: string[]): void {
    if(error) {
        console.log(`Error ${error.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if(titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<string[]> {
    const titles =  await getBooksByCategoryPromise(category);
    console.log(titles);
    return titles;
}