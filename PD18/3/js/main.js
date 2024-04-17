const book1 ={  
    title: "matematikos vadovelis",
    author: "Algirdas",
    pages: 200
};

const book2 ={
    title: "anglu vadovelis",
    author: "Viktoras",   
    pages: 200
};



function book(obj) {
    console.log(obj.author);
    console.log(obj.title);
    console.log(obj.pages);
}

book(book1);
book(book2);