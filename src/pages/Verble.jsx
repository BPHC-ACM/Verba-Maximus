import React, { useState, useEffect } from 'react';
import { IconShare } from '@tabler/icons-react';
import words from '../words.json';
import possibleGuesses from '../possible_guess.json';
import englishWords from '../english_word.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Snackbar, Modal, Button, Box, Typography } from '@mui/material';

const Verble = () => {
	const maxAttempts = 6;

	const [solution, setSolution] = useState('');
	const [guesses, setGuesses] = useState(Array(maxAttempts).fill(''));
	const [currentGuess, setCurrentGuess] = useState('');
	const [attempt, setAttempt] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [message, setMessage] = useState('');
	const [shareText, setShareText] = useState('');
	const [isAlert, setAlert] = useState(false);
	const [openHowToPlay, setOpenHowToPlay] = useState(false);
	const [keyStates, setKeyStates] = useState({});

	const handleHowToPlayOpen = () => setOpenHowToPlay(true);
	const handleHowToPlayClose = () => setOpenHowToPlay(false);

	useEffect(() => {
	    const date = new Date();
	    const day = date.getDate();
	    const month = date.getMonth() + 1;
	    const year = date.getFullYear();
	    const today = `${day}/${month}/${year}`;
	
	    const wordOfTheDay = words.find((entry) => entry.Date === today);
	    if (wordOfTheDay) {
	        setSolution(wordOfTheDay.Word.toUpperCase());
	    } else {
	        setMessage('Error: No word for today!');
	        setGameOver(true);
	    }
	}, []);

	const updateKeyStates = (guess, solution) => {
		const newKeyStates = { ...keyStates };
		const solutionArray = solution.split('');
		const guessArray = guess.split('');

		guessArray.forEach((letter, i) => {
			if (solutionArray[i] === letter) {
				newKeyStates[letter] = 'correct-box';
				solutionArray[i] = null;
			}
			if (!newKeyStates[letter]) {
				const index = solutionArray.indexOf(letter);
				if (index !== -1) {
					newKeyStates[letter] = 'present-box';
					solutionArray[index] = null;
				} else {
					newKeyStates[letter] = 'absent-box';
				}
			}
		});

		setKeyStates(newKeyStates);
	};

	const generateShareText = () => {
		const grid = guesses
			.filter((guess) => guess)
			.map((guess) => {
				const solutionArray = solution.split('');
				const guessArray = guess.split('');
				const result = Array(5).fill('');

				guessArray.forEach((letter, i) => {
					if (solutionArray[i] === letter) {
						result[i] = '🟩';
						solutionArray[i] = null;
					}
				});

				guessArray.forEach((letter, i) => {
					if (result[i] === '') {
						const index = solutionArray.indexOf(letter);
						if (index !== -1) {
							result[i] = '🟨';
							solutionArray[index] = null;
						} else {
							result[i] = '⬛';
						}
					}
				});

				return result.join('');
			})
			.join('\n');

		const today = new Date();
		const formattedDate = `${String(today.getDate()).padStart(
			2,
			'0'
		)}/${String(today.getMonth() + 1).padStart(
			2,
			'0'
		)}/${today.getFullYear()}`;

		const wordEntry = words.find(
			(entry) =>
				entry.Date ===
				today.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'numeric',
					day: 'numeric',
				})
		);
		const verbleNumber = wordEntry ? wordEntry.Verble : 'N/A';

		const linesUsed = guesses.filter((guess) => guess !== '').length + 1;
		const text = `Verble #${verbleNumber} (${formattedDate}) ${linesUsed}/6\n\n${grid}\n🟩🟩🟩🟩🟩\n\nPlay here:\nhttps://verba-maximus.netlify.app/verble`;
		console.log(text);
		setShareText(text);
	};

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

		updateKeyStates(currentGuess, solution);
		if (currentGuess === solution) {
			setMessage('🎉 You guessed it right!');
			setGameOver(true);
			generateShareText();
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

	const getLetterClass = (guess, solution) => {
		const result = Array(5).fill('glass');
		const solutionArray = solution.split('');
		const guessArray = guess.split('');

		guessArray.forEach((letter, i) => {
			if (solutionArray[i] === letter) {
				result[i] = 'correct-box';
				solutionArray[i] = null;
			}
		});

		guessArray.forEach((letter, i) => {
			if (result[i] === 'glass') {
				const index = solutionArray.indexOf(letter);
				if (index !== -1) {
					result[i] = 'present-box';
					solutionArray[index] = null;
				} else {
					result[i] = 'absent-box';
				}
			}
		});

		return result;
	};

	const keyboardLayout = [
		'Q.W.E.R.T.Y.U.I.O.P',
		'A.S.D.F.G.H.J.K.L',
		'Z.X.C.V.B.N.M',
		'Enter.Backspace',
	];

	return (
		<div>
			<Header />
			<div className='heading'>
				<h1>Verble</h1>
			</div>
			<div className='darkbrown'>
				<div
					style={{
						textAlign: 'center',
						paddingTop: '20px',
						marginBottom: '-30px',
						color: '#e2ddc5',
					}}
				>
					<Button
						variant='filled'
						className='how-to-play'
						onClick={handleHowToPlayOpen}
					>
						How to Play?
					</Button>
				</div>

				<Modal
					open={openHowToPlay}
					onClose={handleHowToPlayClose}
					aria-labelledby='how-to-play-title'
					aria-describedby='how-to-play-description'
				>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 300,
							bgcolor: 'background.paper',
							borderRadius: 2,
							boxShadow: 24,
							p: 4,
						}}
					>
						<Typography
							id='how-to-play-title'
							variant='h6'
							sx={{ fontWeight: 'bold', marginBottom: 2 }}
						>
							How To Play
						</Typography>
						<Typography
							id='how-to-play-description'
							variant='body1'
							sx={{ marginBottom: 1 }}
						>
							Guess the Verble in 6 tries.
						</Typography>
						<Typography variant='body1' sx={{ marginBottom: 1 }}>
							Each guess must be a valid 5-letter word.
						</Typography>
						<Typography variant='body1' sx={{ marginBottom: 1 }}>
							The color of the tiles will change to show how close
							your guess was to the word.
						</Typography>
						<Typography variant='body1' sx={{ marginBottom: 1 }}>
							<strong>Colour Legend:</strong>
						</Typography>
						<Typography variant='body1'>
							{
								'🟩 The letter is in the word and in the correct spot.'
							}
						</Typography>
						<Typography variant='body1'>
							{
								'🟨 The letter is in the word but in the wrong spot.'
							}
						</Typography>
						<Typography variant='body1'>
							{'⬛️ The letter is not in the word in any spot.'}
						</Typography>
					</Box>
				</Modal>
				<div className='boxholder'>
					{guesses.map((guess, i) => (
						<div
							key={i}
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							{Array(5)
								.fill('')
								.map((_, j) => {
									const letter =
										i === attempt
											? currentGuess[j] || ''
											: guess[j] || '';
									const classes =
										i < attempt
											? getLetterClass(guess, solution)[j]
											: i === attempt
											? 'glass'
											: '';

									return (
										<div
											key={j}
											className={`box ${classes}`}
										>
											{letter}
										</div>
									);
								})}
						</div>
					))}
				</div>

				<div className='keyboard'>
					{keyboardLayout.map((row, rowIndex) => (
						<div key={rowIndex} className='keyboard-row'>
							{row.split('.').map((key, keyIndex) => (
								<button
									key={keyIndex}
									className={`key glass ${
										keyStates[key] || ''
									} ${
										key === 'Enter' || key === 'Backspace'
											? 'large-key'
											: ''
									}`}
									onClick={() => handleKeyPress(key)}
								>
									{key}
								</button>
							))}
						</div>
					))}
				</div>
			</div>

			<Modal open={gameOver} onClose={() => setGameOver(false)}>
				<div className='message'>
					<h2>{message}</h2>
					{guesses[5] === '' && (
						<button
							onClick={() => {
								if (window.innerWidth <= 768) {
									navigator
										.share({
											title: 'Verble Result',
											text: shareText,
										})
										.catch((error) =>
											console.error(
												'Sharing failed:',
												error
											)
										);
								} else {
									navigator.clipboard
										.writeText(shareText)
										.then(() => {
											setAlert(true);
										});
								}
							}}
							className='key glass'
						>
							<IconShare size={14} />
						</button>
					)}
				</div>
			</Modal>

			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={isAlert}
				autoHideDuration={5000}
				onClose={() => setAlert(false)}
				message='Copied to Clipboard'
			/>
			<Footer />
		</div>
	);
};

export default Verble;
