import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'diraction'})
export class Diraction  implements PipeTransform {
    transform(angle: number): string | number {
        if(angle > 11.25 && angle < 33.75) return angle + ' NNE';
        if(angle > 33.75 && angle < 56.25) return angle + ' NE';
        if(angle > 56.25 && angle < 78.75) return angle + ' ENE';
        if(angle > 78.75 && angle < 101.25) return angle + ' E';
        if(angle > 101.25 && angle < 123.75) return angle + ' ESE';
        if(angle > 123.75 && angle < 146.25) return angle + ' SE';
        if(angle > 146.25 && angle < 168.75) return angle + ' SSE';
        if(angle > 168.75 && angle < 191.25) return angle + ' S';
        if(angle > 191.25 && angle < 213.75) return angle + ' SSW';
        if(angle > 213.75 && angle < 236.25) return angle + ' SW';
        if(angle > 236.25 && angle < 258.75) return angle + ' WSW';
        if(angle > 258.75 && angle < 281.25) return angle + ' W';
        if(angle > 281.25 && angle < 303.75) return angle + ' WNW';
        if(angle > 303.75 && angle < 326.25) return angle + ' NW';
        if(angle > 326.25 && angle < 348.75) return angle + ' NNW';
        if(angle > 348.75 && angle < 360) return angle + ' N';
        if(angle > 0 && angle < 11.25) return angle + ' N';
        else return angle;
    }
}