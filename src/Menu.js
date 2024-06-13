import React, {useState} from 'react';
import { PiBasketBold } from "react-icons/pi";

export default function Menu(){
	
	return (
		<header>
			<div>
				<ul className='nav'>
					<li><a href="#">Главная</a></li>
					<li><a href="#">Рекомендации</a></li>
					<li><a href="#">О нас</a></li>
				</ul>
				<a href="/Cart"><PiBasketBold className='book-reserv'/></a>
			</div>
		</header>
	)
}