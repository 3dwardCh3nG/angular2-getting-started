import {Component} from '@angular/core';
import {RandomColorDirective} from "./random-color-directive";
@Component({
    selector: "my-app",
    template: `<h3 randomColor>{{title}}</h3>`,
    directives: [RandomColorDirective]
})
export class AppComponent {
    private title:string = "Angular 2.0 is in the house.";

    constructor() {
        this.test1();
    }

    test1() {
        [1, 2, 3]
            .map(item =>
                `(${item})`)
            .filter(item =>
            item.length > 1)
            .forEach(value =>
                console.log(value));
        const testObj = {a: 1, b: 2, c: 3};
        const {a, b} = testObj;
        this.test2(a, b, testObj);
    }

    test2(a = 1, b = 2, {c = 3}) {
        console.log(a, b, c);
    }
}
