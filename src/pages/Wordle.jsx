import React, { useState, useEffect } from 'react';

import words from '../words.json';
import possibleGuesses from '../possible_guess.json';
import englishWords from '../english_word.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Wordle = () => {
	const maxAttempts = 6;

	const [solution, setSolution] = useState('');
	const [guesses, setGuesses] = useState(Array(maxAttempts).fill(''));
	const [currentGuess, setCurrentGuess] = useState('');
	const [attempt, setAttempt] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		const today = new Date().toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
		const wordOfTheDay = words.find((entry) => entry.Date === today);
		if (wordOfTheDay) {
			setSolution(wordOfTheDay.Word[0].toUpperCase());
		} else {
			setMessage('Error: No word for today!');
			setGameOver(true);
		}
	}, []);

	const handleKeyPress = (key) => {
		if (gameOver) return;

		if (key === 'Enter') {
			handleSubmit();
		} else if (key === 'Backspace') {
			setCurrentGuess((prev) => prev.slice(0, -1));
		} else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
			setCurrentGuess((prev) => prev + key);
		}
	};

	const isValidWord = (word) => {
		return (
			possibleGuesses.words.includes(word.toLowerCase()) ||
			englishWords.words.includes(word.toLowerCase())
		);
	};

	const handleSubmit = () => {
		if (currentGuess.length !== 5) return;

		if (!isValidWord(currentGuess)) {
			alert('Invalid word!');
			return;
		}

		const newGuesses = [...guesses];
		newGuesses[attempt] = currentGuess;
		setGuesses(newGuesses);

		if (currentGuess === solution) {
			setMessage('🎉 You guessed it right!');
			setGameOver(true);
		} else if (attempt + 1 === maxAttempts) {
			setMessage(`😢 Game over! The word was ${solution}`);
			setGameOver(true);
		}

		setCurrentGuess('');
		setAttempt((prev) => prev + 1);
	};

	useEffect(() => {
		const handlePhysicalKeyPress = (event) => {
			const key = event.key.toUpperCase();
			if (key === 'ENTER') {
				handleKeyPress('Enter');
			} else if (key === 'BACKSPACE') {
				handleKeyPress('Backspace');
			} else if (/^[A-Z]$/.test(key)) {
				handleKeyPress(key);
			}
		};

		window.addEventListener('keydown', handlePhysicalKeyPress);
		return () => {
			window.removeEventListener('keydown', handlePhysicalKeyPress);
		};
	}, [currentGuess, gameOver]);

	const getLetterClass = (letter, index, isCurrent = false) => {
		if (isCurrent) return 'glass';
		if (solution[index] === letter) return 'correct-box';
		if (solution.includes(letter)) return 'present-box';
		return 'glass';
	};
	

	const keyboardLayout = [
		'Q.W.E.R.T.Y.U.I.O.P',
		'A.S.D.F.G.H.J.K.L',
		'Z.X.C.V.B.N.M',
		'Enter.Backspace',
	];

	return (
		<div>
			<Header/>
			<div className="heading">
				<h1>Wordle</h1>
			</div>
			<div className="darkbrown">
			<div className="boxholder">
			{guesses.map((guess, i) => (
				<div
					key={i}
					style={{
						display: 'flex',
						justifyContent: 'center',
						
					} } 
				>
					{Array(5)
						.fill('')
						.map((_, j) => (
							<div
    							key={j}
    							className={`box ${getLetterClass(
        									i === attempt ? currentGuess[j] || '' : guess[j] || '',
        									j,
       			 							i === attempt
    									)}`}
							>
    						{i === attempt ? currentGuess[j] || '' : guess[j] || ''}
						</div>
						))}
				</div>
			))}
			</div>
			

			<div className="keyboard">
    			{keyboardLayout.map((row, rowIndex) => (
        		<div key={rowIndex} className="keyboard-row">
            		{row.split('.').map((key, keyIndex) => (
                	<button
                    	key={keyIndex}
                    	className={`key glass ${key === 'Enter' || key === 'Backspace' ? 'large-key' : ''}`}
                    	onClick={() => handleKeyPress(key)}
                		>
                    	{key}
                	</button>
            		))}
        		</div>
    			))}
				</div>


			</div>	

			<div className="message">{gameOver && <h2>{message}</h2>}</div>
			<Footer />
		</div>
	);
};

export default Wordle;
