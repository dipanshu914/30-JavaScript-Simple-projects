let Bitcoin = document.getElementById("bitcoin");
let Ethereum = document.getElementById("ethereum");
let DogeCoin = document.getElementById("dogecoin");

async function getData() {
	const url =
		" https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

	// "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,ETH&tsyms=USD,DOGE&tsyms=USD";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response Status: ${response.status}`);
		}

		const json = await response.json();
		Bitcoin.innerHTML = "$" + json.bitcoin.usd;
		Ethereum.innerHTML = "$" + json.ethereum.usd;
		DogeCoin.innerHTML = "$" + json.dogecoin.usd;
	} catch (error) {
		console.error(error.message);
	}
}

getData();
