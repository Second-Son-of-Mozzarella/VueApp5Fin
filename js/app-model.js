
function Book(title,author,length,language,timePeriod,type,pagesRead){

    this.id = Math.floor(Math.random() * 9999999);

    this.title = title ?? '';
    this.author = author ?? '';
    this.length = length ?? 0;
    this.language = language ?? '';
    this.timePeriod = timePeriod ?? '';
    this.type = type ?? '';
    this.pagesRead = pagesRead ?? 0;


    // other firebase internals
    this._path = '';


    this.toString = function () {
        return this.title;
    }

    this.toFirestore = function () {
        return {
            title: this.title,
            author: this.author,
            length: this.length,
            language: this.language,
            timePeriod: this.timePeriod,
            type: this.type,
            pagesRead: this.pagesRead,

        }
    }

}


function ArchBook(title,author,length,language,timePeriod,type,pagesRead){

    this.id = Math.floor(Math.random() * 9999999);

    this.title = title ?? '';
    this.author = author ?? '';
    this.length = length ?? 0;
    this.language = language ?? '';
    this.timePeriod = timePeriod ?? '';
    this.type = type ?? '';
    this.pagesRead = pagesRead ?? 0;


    // other firebase internals
    this._path = '';


    this.toString = function () {
        return this.title;
    }

    this.toFirestore = function () {
        return {
            title: this.title,
            author: this.author,
            length: this.length,
            language: this.language,
            timePeriod: this.timePeriod,
            type: this.type,
            pagesRead: this.pagesRead,

        }
    }

}


ArchBook.collectionName = 'Archive'
Book.collectionName = 'Library';




Book.fromFirestore = function (snapshot, options){
    const data = snapshot.data(options);
    const book = new Book(data.title, data.author, data.length, data.language, data.timePeriod, data.type, data.pagesRead);


    book.id = snapshot.id;
    book._path = snapshot.ref.path;

    return book;
}

ArchBook.fromFirestore = function (snapshot, options){
    const data = snapshot.data(options);
    const book = new ArchBook(data.title, data.author, data.length, data.language, data.timePeriod, data.type, data.pagesRead);


    book.id = snapshot.id;
    book._path = snapshot.ref.path;

    return book;
}






function ApiBook(title, author){

    this.id = Math.floor(Math.random() * 9999999);

    this.title = title ?? '';
    this.author = author ?? '';

}


function ApiBookShelf(){
    this.apiBooks = [];


    function addApiBook(apibook){
        if(apibook instanceof ApiBook) {
            this.apiBooks.push(apibook);

        }
    }


}


