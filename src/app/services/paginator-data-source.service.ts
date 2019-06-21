import { getTail } from '@writetome51/array-get-head-tail';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { Injectable } from '@angular/core';
import { SearchService } from './search.service';


@Injectable({
    providedIn: 'root'
})
export class PaginatorDataSourceService  {


    constructor(
        // The data is filtered by SearchService before getting handed to the Paginator.
        private __search: SearchService
    ) {
    }


    get data(){
        return this.__search.results;
    }


    get dataTotal(): number {
        return this.data.length;
    }


    getBatch(batchNumber: number, itemsPerBatch: number, isLastBatch: boolean): any[] {
        const start = ((batchNumber - 1) * itemsPerBatch);

        if (isLastBatch) {
            // ...only return the remaining items in array, not itemsPerBatch:
            let numItemsToGet = (this.dataTotal - start);
            return getTail(numItemsToGet, this.data);
        }
        else return getAdjacentAt(start, itemsPerBatch, this.data);
    }
}