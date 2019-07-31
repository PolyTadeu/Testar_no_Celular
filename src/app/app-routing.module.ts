import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'pokemons', loadChildren: './pokemons/pokemons.module#PokemonsPageModule' },
  { path: 'perfil/:id', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate: [AuthenticationGuard] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
