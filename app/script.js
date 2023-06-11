import React, { useMemo, useState } from 'react';
import { render } from 'react-dom';

const App = () => {
	const [status, setStatus] = useState('rest');
	const [time, setTime] = useState(1200);
	const [timer, setTimer] = useState(null);

	const formatTime = (time) => {
		const m = Math.floor(time / 60);
		const s = time % 60;
		const formattedM = `${m.toString().padStart(2, '0')}`;
		const formattedS = `${s.toString().padStart(2, '0')}`;
		const formattedTime = `${formattedM}:${formattedS}`;
		return formattedTime;
	};

	const formatTimeMemoized = useMemo(() => formatTime(time), [time]);

	return (
		<div>
			<h1>Protect your eyes</h1>
			{status === 'off' && (
				<div>
					<p>
						According to optometrists, in order to save your eyes,
						you should follow the 20/20/20 rule. It means you should
						rest your eyes every 20 minutes for 20 seconds by
						looking more than 20 feet away.
					</p>
					<p>
						This app will help you track your time and inform you
						when it's time to rest.
					</p>
				</div>
			)}
			{status === 'work' && <img src="./images/work.png" alt="Work" />}
			{status === 'rest' && <img src="./images/rest.png" alt="Rest" />}
			{status !== 'off' && (
				<div>
					<div className="timer">{formatTimeMemoized(time)}</div>
					<button className="btn">Stop</button>
				</div>
			)}
			{status === 'off' && <button className="btn">Start</button>}
			<button className="btn btn-close">X</button>
		</div>
	);
};

render(<App />, document.querySelector('#app'));