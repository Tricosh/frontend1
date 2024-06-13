import React from "react";
import { PiTrashBold } from "react-icons/pi";

class Cart extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      books: [],
    }
	
	this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount(){


    fetch(`cart`).then( function (res){
      return res.json();
    })
    .then( (result)=>{
      this.setState({books:result})
    })

  }
  
  addToCart(e){
    e.preventDefault()
	console.log(e)

  }

  formatBookShort(book) {
    return(
      <div className='BookCart'>
      {/*<a href={"/book?id="+book._id} > {book.bookname} </a>*/}
	  <img src={"./img/" + book.picture}  />
	  <h2>{book.title}</h2>
	  <p>{book.author}</p>
	  <p><a href={"/book?id="+book._id} className='add-tocart'>детали</a></p>
	  <PiTrashBold className='Trash' bookName={book.title}/>
	  <p onClick={(e) => {
		e.preventDefault()
		fetch(`cart`, {
      method:'PATCH',
      body:JSON.stringify({title:book.title}),
      headers: {'Content-Type':'application/json'}

    }).then( (res)=>{
      return {}
    })
	  }}>Удалить</p>
      </div>
    )
  }


  render(){
    return(
      <div>
        {this.state.books.map(this.formatBookShort)}
      </div>
    )
  }

}

export default Cart;
//- {this.state.test}