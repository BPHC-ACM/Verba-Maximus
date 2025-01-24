import React, { useState, useEffect } from 'react';
import wordlist from '../lexicon-league.json';
import { IconTrashXFilled } from '@tabler/icons-react';
import possibleGuesses from '../possible_guess.json';
import englishWords from '../english_word.json';
import Footer from '../components/Footer';
import { Modal, Button, Box, Typography } from '@mui/material';

const Keyboard = React.memo(({ keyboardLayout, keyStates, handleKeyPress }) => (
	<div className='keyboard' style={{ paddingBottom: '20px' }}>
		{keyboardLayout.map((row, rowIndex) => (
			<div key={rowIndex} className='keyboard-row'>
				{row.split('.').map((key, keyIndex) => (
					<button
						key={keyIndex}
						className={`key glass ${keyStates[key] || ''} ${
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
));

const GuessRow = React.memo(
	({ guess, solution, isCurrent, currentGuess, getLetterClass }) => (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			{Array(5)
				.fill('')
				.map((_, j) => {
					const letter = isCurrent
						? currentGuess[j] || ''
						: guess[j] || '';
					const classes = isCurrent
						? 'glass'
						: getLetterClass(guess, solution)[j];

					return (
						<div key={j} className={`box ${classes}`}>
							{letter}
						</div>
					);
				})}
		</div>
	)
);

const LexiconLeague = () => {
	const maxAttempts = 6;
	const [words, setWords] = useState(wordlist);
	const [solution, setSolution] = useState('');
	const [guesses, setGuesses] = useState(Array(maxAttempts).fill(''));
	const [currentGuess, setCurrentGuess] = useState('');
	const [attempt, setAttempt] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [message, setMessage] = useState('');
	const [openHowToPlay, setOpenHowToPlay] = useState(false);
	const [keyStates, setKeyStates] = useState({});
	const [wordsCompleted, setWordsCompleted] = useState(
		Number(localStorage.getItem('wordsCompleted')) || 0
	);

	const handleHowToPlayOpen = () => setOpenHowToPlay(true);
	const handleHowToPlayClose = () => setOpenHowToPlay(false);
	const clearLocalStorage = () => {
		localStorage.clear();
		alert('Refresh page to confirm reset!');
	};

	useEffect(() => {
		const shuffledWords = [...words].sort(() => Math.random() - 0.5);
		setWords(shuffledWords);
		setSolution(shuffledWords[0].toUpperCase());
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

			setWordsCompleted((prev) => {
				const newCount = prev + 1;
				localStorage.setItem('wordsCompleted', newCount);
				return newCount;
			});
		} else if (attempt + 1 === maxAttempts) {
			setMessage(`😢 Game over! The word was ${solution}`);
			setGameOver(true);
		}

		if (currentGuess === solution || attempt + 1 === maxAttempts) {
			setTimeout(() => {
				setKeyStates({});

				if (words.length > 1) {
					const remainingWords = words.slice(1);
					setWords(remainingWords);
					setSolution(remainingWords[0].toUpperCase());
				} else {
					const shuffledWords = [...words].sort(
						() => Math.random() - 0.5
					);
					setWords(shuffledWords);
					setSolution(shuffledWords[0].toUpperCase());
				}

				setGuesses(Array(maxAttempts).fill(''));
				setCurrentGuess('');
				setAttempt(0);
				setGameOver(false);
				setMessage('');

				console.log('State reset complete.');
			}, 1000);
			return;
		}

		setCurrentGuess('');
		setAttempt((prev) => prev + 1);
	};

	useEffect(() => {
		let timeout;
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
			clearTimeout(timeout);
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
			<div className='darkbrown'>
				<div className='header'>LEXICON LEAGUE</div>
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
							Guess the hidden word in 6 tries.
						</Typography>
						<Typography variant='body1' sx={{ marginBottom: 1 }}>
							Each guess must be a valid 5-letter word.
						</Typography>
						<Typography variant='body1' sx={{ marginBottom: 1 }}>
							The color of the tiles will change to show how close
							your guess was to the word.
						</Typography>
						<Typography variant='body1' sx={{ marginBottom: 1 }}>
							Guess the maximum number of words to win!
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
				<div className='boxholder' style={{ margin: '0.75rem' }}>
					{guesses.map((guess, i) => (
						<GuessRow
							key={i}
							guess={guess}
							solution={solution}
							isCurrent={i === attempt}
							getLetterClass={getLetterClass}
							currentGuess={currentGuess}
						/>
					))}
				</div>
				<div className='counter'>
					Words Completed: {wordsCompleted}{' '}
					<IconTrashXFilled size={16} onClick={clearLocalStorage}>
						Reset Local Storage
					</IconTrashXFilled>
				</div>

				<Keyboard
					keyboardLayout={keyboardLayout}
					keyStates={keyStates}
					handleKeyPress={handleKeyPress}
				/>
			</div>

			<Modal open={gameOver} onClose={() => setG(false)}>
				<div className='message'>
					<h2>{message}</h2>
				</div>
			</Modal>
			<Footer />
		</div>
	);
};

export default LexiconLeague;
