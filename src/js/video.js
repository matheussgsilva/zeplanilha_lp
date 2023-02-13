function stop() { 
	document.getElementById(videoDemo).postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
};