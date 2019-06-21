export abstract class SearchService {

	data: any[];

	// Must have same signature as the callback you pass to the Array.filter() method:
	searchAlgorithm; // Function

	protected _results = [];
	protected _searchText = '';


	// Remember that every time you access this.results, it re-runs
	// the search algorithm:
	get results() {
		if (this._searchText === (null || undefined)) {
			throw new Error(
				'The \'searchText\' property must be set before you can access the \'results\' property'
			);
		}
		if (this._searchText.length > 0) {
			this._set_searchResults();
		}
		else this._results = this.data;
		return this._results;
	}


	get searchText() {
		return this._searchText;
	}


	set searchText(value) {
		this._searchText = String(value).trim();
	}


	private _set_searchResults() {
		if (this.data === (null || undefined)) {
			throw new Error(
				'The \'data\' property must be set before you can access the \'results\' property'
			);
		}
		if (this.searchAlgorithm === (null || undefined)) {
			throw new Error(
				'The \'searchAlgorithm\' property must be set before you can access the \'results\' property'
			);
		}
		this._results = this.data.filter(this.searchAlgorithm);
	}


}