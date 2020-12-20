import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';
import { Category } from './enums';
import { Book, Magazine } from './intefaces';
import { RefBook, Shelf, UniversityLibrarian } from './classes';
import { createCustomer } from './functions';
import Encyclopedia from './classes/Encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ===============================================

// Task 02.01. Basic Types
// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);
// logFirstAvailable(getAllBooks());
// console.log(getBookAuthorByIndex(0));
// console.log(calcTotalPages());

// Task 03.01. Function Type
// const myId: string = createCustomerID('Yulia', 21);
// console.log(myId);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator("Sasha", 30));

// Task 03.02. Optional, Default and Rest Parameters
// createCustomer("olol", 20, 'city');
// createCustomer("ffff", 20);

// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));
// console.log(myBooks);

// Task 03.03. Function Overloading
// console.log(getTitles('Lea Verou'));
// const checkedOutBooks =  getTitles(false);
// console.log(checkedOutBooks);

// Task 03.04. Assertion Functions
// let result = bookTitleTransform('JavaScript');
// console.log(result);
// result = bookTitleTransform(123);
// console.log(result);

// Task 04.01. Defining an Interface
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: reason => `Damaged: ${reason}`
// };
// printBook(myBook);
// console.log(myBook.markDamaged('missing back cover'));

// Task 04.02. Defining an Interface for Function Types
// const logDamage: Logger = reason => `Damaged: ${reason}`;
// console.log(logDamage('missing back cover'));

// Task 04.03. Extending Interface
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@epam.com',
//     numBooksPublished: 3,
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Anna',
//     email: 'anna@epam.com',
//     department: 'yes',
//     assistCustomer: custName => console.log(custName),
// };
// console.log(favoriteAuthor);
// console.log(favoriteLibrarian);

// Task 04.04. Optional Chaining
// const offer: any = {};
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.getTitle?.());

// Task 04.05. Keyof Operator
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[1], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01. Creating and Using Classes
// const ref: ReferenceItem = new ReferenceItem(1,'Typescript', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Set Publisher';
// console.log(ref.publisher);
// console.log(ref.getId());

// Task 05.02. Extending Classes
// const refBook = new RefBook(7, 'TS', 2021, 5);
// console.log(refBook);
// refBook.printItem();

// Task 05.03. Creating Abstract Classes
// const refBook = new Encyclopedia(7, 'TS', 2021, 5);
// console.log(refBook);
// refBook.printCitation();

// Task 05.04. Interfaces for Class Types
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Bella';
// favoriteLibrarian.assistCustomer('Oslo');

// Task 05.05. Intersection and Union Types
// const personBook: PersonBook = {
//     author: 'Tom',
//     available: false,
//     category: Category.JavaScript,
//     email: 'Anna@epma.com',
//     id: 0,
//     name: 'Anna',
//     title: 'TS Ninja'
// };
// console.log(personBook);

// Task 06.05. Dynamic Import Expression
// const flag: boolean = true;
// if(flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Petro';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         });
// }

// Task 06.06. Type-Only Imports and Exports
// let lib: Library = new Library();
// let lib: Library = {
//     id:1,
//     name: 'Anna',
//     address: 'Vin'
// };
// console.log(lib);

// 07. Generics
// Task 07.01. Generic Functions
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// const nums = [1,23, 4, 5];
// console.log(purge(nums));

// Task 07.02. Generic Interfaces and Classes
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const book = bookShelf.getFirst().title;
// console.log(book);
// const  magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03. Generic Constraints
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// const objBook: BookRequiredFields = {
//     id: 1,
//     author: 'Ann',
//     available: false,
//     category: Category.JavaScript,
//     markDamaged: null,
//     pages: 200,
//     title: 'Lovely title'
// };
//
// const  updatedBook: UpdatedBook = {
//     id: 3,
//     title: 'Super Title'
// };

// Task 07.04. Utility Types
// const params: Parameters<CreateCustomerFunctionType> = ['Anna', 30];
// createCustomer(...params);
// console.log(params);

// 08. Decorators
// Task 08.01. Class Decorators (sealed) && Task 08.02.
//  Class Decorators that replace constructor functions (logger)

// const o = new UniversityLibrarian();
// console.log(o);
// o.name = 'Slava';
// o['printLibrarian']();



// Task 08.03. Method Decorator (writable)

// const o = new UniversityLibrarian();
// o.assistFaculty = null;
// // o.teachCommunity = null;
// console.log(o);

// Task 08.04. Method Decorator (timeout)
// const enc = new RefBook(0, 'Title', 2020, 2);
// enc.printItem();

// Task 08.05. Parameter Decorator (logParameter) && Task 08.06. Property Decorator
const o = new UniversityLibrarian();
o.name = 'Slava';
console.log(o);
o.assistCustomer('Anna');

// Task 08.07. Accessor Decorator

// const enc = new RefBook(0, 'Title', 2020, 2);
// enc.copiess = 20;
// enc.copiess = -1.5;


