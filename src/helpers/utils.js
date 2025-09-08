// Categories list

export const PRODUCT_CAT_LIST = [
  { "id": "spiritual", "title": "Spiritual" },
  { "id": "motivational", "title": "Motivational" },
  { "id": "silhouette", "title": "Silhouette" },
  { "id": "nature", "title": "Nature" },
  { "id": "romantic", "title": "Romantic" },
  { "id": "animal", "title": "Animal" }
];


export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export async function fetchWithErrorHandling(url, options = {}) {
	try {
		const response = await fetch( url, {
			...options,
			headers: {
				'Content-Type': 'application/json', // Default content type
				...( options?.headers || {} ), // Merge any additional headers provided
			},
		} );

		// Check if the response is successful
		if ( ! response.ok ) {
			//const errorMessage = await response.text(); // Get error message from response
			//throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);

			const errorMessage = await response.json(); // Get error message from response
			throw new Error( errorMessage?.data?.error || 'Error' );
		}

		// Parse JSON response if successful
		const data: T = await response.json();
		return data; // Return the parsed data
	} catch ( error ) {
		// Handle errors during the fetch operation
		if ( error instanceof Error ) {
			//console.error("Fetch error:", error.message);
			throw new Error( error.message );
		} else {
			//console.error("Unexpected error:", error);
			throw new Error( 'An unexpected error occurred.' );
		}
	}
}