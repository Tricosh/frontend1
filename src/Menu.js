import React, {useState} from 'react';
import { PiBasketBold } from "react-icons/pi";

import Order from './Order';

export default function Menu(){
	
	let [basketOpen, setBasketOpen] = useState(false)
	
	return (
		<header>
			<div>
				<ul className='nav'>
					<li><a href="#">Главная</a></li>
					<li><a href="#">Рекомендации</a></li>
					<li><a href="#">О нас</a></li>
				</ul>
				<PiBasketBold onClick={() => setBasketOpen(basketOpen = !basketOpen)} className={`book-reserv ${basketOpen && 'active'}`} />
				
				{basketOpen && (
					<div className='book-reserv-mod'>
					</div>
				)}
			</div>
		</header>
	)
}