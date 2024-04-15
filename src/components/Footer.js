import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	// useEffect(() => {
// 	console.log(`Cette alerte s'affiche à chaque rendu`)
// })

// useEffect(() => {
// 	console.log(`Cette alerte s'affiche au premier rendu`)
// }, [])

// useEffect(() => {
// 	console.log(`Cette alerte s'affiche la première fois et quand mon panier est maj`)
// }, [cart])

// useEffect(() => {
// return () =>
// 		console.log(`Cette alerte s'affiche quand l'élément désiré est retiré du DOM`)
// })

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
