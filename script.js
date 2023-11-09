//Book class
let form=document.querySelector('#book-form');  

let bookList=document.querySelector('#book-list');  

class Book { 
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class  
class UI{
    constructor(){  

    }
    addToBookList(book) {
        let list=document.querySelector('#book-list');
        let row=document.createElement('tr');
        row.innerHTML=`<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
        console.log(row);   
    }
    clearFields() {
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }
    showAlert(massage,className){
        let div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(massage));
        let container=document.querySelector('.container');
        let form=document.querySelector('#book-form');
        container.insertBefore(div,form);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    
    }
}
//Add event listener    
form.addEventListener('submit',newBook);
bookList.addEventListener('click',removeBook);

//Define function
 
function newBook(e) {
    let title=document.querySelector('#title').value,
    author=document.querySelector('#author').value,
    isbn=document.querySelector('#isbn').value; 
    let ui=new UI();
    if(title===''||author===''||isbn===''){
        ui.showAlert('Please fill in all fields','error');
        //alert('Please fill in all fields');
    }else{
        let book =new Book(title,author,isbn); 
        ui.addToBookList(book);
        ui.clearFields();  
        ui.showAlert('Book Added!','success');
    }
 
   // console.log(book);   
    e.preventDefault();
}
function removeBook(e){
    //e.preventDefault();
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        let ui=new UI();
        ui.showAlert('Book Removed!','success');
    }

}