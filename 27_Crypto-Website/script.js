let Bitcoin = document.getElementById("bitcoin");
let Ethereum = document.getElementById("ethereum");
let DogeCoin = document.getElementById("dogecoin");

async function getData() {
	const url = CRYPTO_API;

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
