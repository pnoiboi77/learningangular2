import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})

// https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Array/filter
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((product: IProduct) =>
            product.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}