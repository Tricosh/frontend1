import React from "react";

class BookDetail extends React.Component {

  constructor(props){
    super(props)

    this.state = []
    this.setRating = this.setRating.bind(this)
    this.addToCart = this.addToCart.bind(this)

  }

  componentDidMount(){

    const queryParameters = new URLSearchParams(window.location.search)

    const id = queryParameters.get("id")
	console.log(id)

    fetch(`bookdetail/${id}`).then( function (res){
      return res.json();
    })
    .then( (result)=>{
      this.setState(result)
    })

  }

  setRating(e){
    e.preventDefault()

    const userRating = e.target.attributes['stars'].value

    this.setState({userRating})

    fetch(`bookdetail/${this.state._id}`, {
      method:'PATCH',
      body:JSON.stringify({rating:userRating}),
      headers: {'Content-Type':'application/json'}

    }).then( (res)=>{
      return {}
    })
  }

  addToCart(e){
    e.preventDefault()

    const incart = !this.state.incart

    this.setState({incart})

    //TODO если книга не в базе юзер_книга, то сначала добавить

    fetch(`bookdetail/${this.state._id}`, {
      method:'POST',
      body:JSON.stringify({incart}),         
      headers: {'Content-Type':'application/json'}

    }).then( (res)=>{
      return {}
    })

  }

  render(){
    return(
     <div className='Detail'>
        <img src={"./img/" + this.state.picture} />
		<h2>Название: {this.state.title}</h2>
        <h2>Автор: {this.state.author}</h2>
        <h2>Жанр: {this.state.genre}</h2>
        <h2>Год: {this.state.year}</h2>
		<p>Описание: {this.state.description}</p>
        <p>Количество: {this.state.quantity}</p>
        <p className='Stars' onClick={this.setRating}>
        <span stars="1">{this.state.userRating<1 ?'O':'✷'}</span>
        <span stars="2">{this.state.userRating<2 ?'O':'✷'}</span>
        <span stars="3">{this.state.userRating<3 ?'O':'✷'}</span>
        <span stars="4">{this.state.userRating<4 ?'O':'✷'}</span>
        <span stars="5">{this.state.userRating<5 ?'O':'✷'}</span>
        </p>
		<p>Рейтинг пользователя: {this.state.userRating}</p>
        <p>Общий рейтинг: {this.state.avarageRating}</p>
        <p className='AddCart' onClick={this.addToCart}>
         {this.state.incart ?'Убрать из корзины':'Добавить в корзину'}</p>
      </div>
    )
  }

}

export default BookDetail;
