import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
