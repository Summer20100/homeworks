class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}
  

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
  
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library  {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) { 
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findResult = this.books.find((book) => book[type] === value);
        return findResult || null;
    }
  
    giveBookByName(bookName) {
        const findResult = this.books.find((book) => book.name === bookName);
        this.books = this.books.filter((book) => book.name != bookName);
        return findResult || null;


//        let reqestBook = this.books.find( (book) => (book.name === bookName) );
//        if ( reqestBook != undefined ) {
//            this.books.splice(this.books.indexOf(reqestBook), 1);
//            return reqestBook;
//        } else {
//            return null;
//        }
    }
}


class Student {
    #journal;
    constructor(fullName) {
        this.name = fullName;
        this.#journal = {};
    }
  
    getName() {
        return this.name;
    }
    
    addMark(grade, subject) {
        if ((grade < 1) || (grade > 5) || (typeof grade !== "number")) {
            return console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
        }
        if (this.#journal[subject] === undefined) {
            this.#journal[subject] = [];
        }
        return this.#journal[subject].push(grade);
    }   
    
    getAverageBySubject(subject) {
        let averageMark = 0;
        if (this.#journal[subject] !== undefined) {
            if (this.#journal[subject].length > 0) {
                let sum = 0;
                this.#journal[subject].forEach((mark) => {sum += mark});
                averageMark = sum / this.#journal[subject].length;
            }
        }
        return averageMark;
    }
    
    getAverage() {
        let sumOfAveMarks = 0;
        let countOfSubjects = 0;
        Object.entries(this.#journal).forEach(([subject]) => {
            sumOfAveMarks += this.getAverageBySubject(subject);
            countOfSubjects++;
        });
        return sumOfAveMarks / countOfSubjects;
    }
}