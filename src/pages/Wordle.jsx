import React, { useState, useEffect } from 'react';

import words from '../words.json';
import possibleGuesses from '../possible_guess.json';
import englishWords from '../english_word.json';

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

	const getLetterStyle = (letter, index, isCurrent = false) => {
		if (isCurrent) return { backgroundColor: 'lightgray' };

		if (solution[index] === letter) return { backgroundColor: 'green' };
		if (solution.includes(letter)) return { backgroundColor: 'yellow' };
		return { backgroundColor: 'gray' };
	};

	const keyboardLayout = [
		'Q.W.E.R.T.Y.U.I.O.P',
		'A.S.D.F.G.H.J.K.L',
		'Z.X.C.V.B.N.M',
		'ENTER.BACKSPACE',
	];

	return (
		<div style={{ textAlign: 'center', marginTop: '20px' }}>
			<h1>Wordle</h1>

			{guesses.map((guess, i) => (
				<div
					key={i}
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '5px',
					}}
				>
					{Array(5)
						.fill('')
						.map((_, j) => (
							<div
								key={j}
								style={{
									width: '40px',
									height: '40px',
									margin: '2px',
									border: '1px solid black',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '20px',
									fontWeight: 'bold',
									textTransform: 'uppercase',
									...getLetterStyle(
										i === attempt
											? currentGuess[j] || ''
											: guess[j] || '',
										j,
										i === attempt
									),
								}}
							>
								{i === attempt
									? currentGuess[j] || ''
									: guess[j] || ''}
							</div>
						))}
				</div>
			))}

			<div style={{ marginTop: '20px' }}>
				{keyboardLayout.map((row, i) => (
					<div
						key={i}
						style={{
							margin: '5px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{row.split('.').map((key) => (
							<button
								key={key}
								onClick={() =>
									handleKeyPress(
										key === 'ENTER'
											? 'Enter'
											: key === 'BACKSPACE'
											? 'Backspace'
											: key
									)
								}
								style={{
									margin: '3px',
									padding:
										key === 'ENTER' || key === 'BACKSPACE'
											? '10px 15px'
											: '10px',
									fontSize: '14px',
									fontWeight: 'bold',
									textTransform: 'uppercase',
									cursor: 'pointer',
									minWidth:
										key === 'ENTER' || key === 'BACKSPACE'
											? '70px'
											: '40px',
								}}
							>
								{key}
							</button>
						))}
					</div>
				))}
			</div>

			{gameOver && <h2 style={{ marginTop: '20px' }}>{message}</h2>}
		</div>
	);
};

export default Wordle;
