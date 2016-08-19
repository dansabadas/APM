import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Loads all features for observables (ES2016)
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    // templateUrl: "",
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <pm-products></pm-products>
                <ul class='nav navbar-nav'>
                    
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ProductListComponent], //ROUTER_DIRECTIVES
    providers: [ProductService, HTTP_PROVIDERS] // ROUTER_PROVIDERS
})
export class AppComponent {
    pageTitle: string = 'Siemens Product Management';
}