const author = { 
    //author is an object with fullname and books as properties
    fullName: "Bob Alice",
    books: ["Book 01", "Book 02", "Book 03"],

    //this is a method that uses arror function
    printBooks() {
        this.books.forEach(book => document.write(book + 'by '+ this.fullName + '<br>'));
    },

    //this is a method also but does not have arror function
    printBooks1() {
        function printValue(book){
            document.write(book + 'by '+ this.fullName + '<br>');
        }
        this.books.forEach(printValue);
    }
};
author.printBooks();
author.printBooks1();