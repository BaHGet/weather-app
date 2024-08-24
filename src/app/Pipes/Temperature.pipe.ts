import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperature'})
export class Temperature  implements PipeTransform {
    transform(values: number): string {
        return `${Math.round(values)} °C`
    }
}