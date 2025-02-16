export default class Utils {
	static callUrl(url) {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log("GET Response:", data);
			})
			.catch((error) => {
				console.error("Get response failed. Error:", error);
			});
	}

	static async getUrl(url) {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}
}
