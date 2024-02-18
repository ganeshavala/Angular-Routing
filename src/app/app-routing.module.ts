import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";


/**
 * The appRoutes constant defines the routes for a web application. It uses the Angular Router module to map different URL paths to specific components. Here's a breakdown of each route:
  The first route maps the empty path to the HomeComponent.
  The second route maps the path 'users' to the UsersComponent and defines a child route for 'users/:id/:name' that maps to the UserComponent.
  The third route maps the path 'servers' to the ServersComponent and defines child routes for 'servers/:id' that maps to the ServerComponent and 'servers/:id/edit' that maps to the EditServerComponent.
  The fourth route maps the path 'not-found' to the ErrorPageComponent and provides data with the message 'Page not found'.
  The last route redirects any unmatched paths to '/not-found'.
 */

const appRoutes:Routes=[{
    path:'',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent,
    children:[
      {
        path:":id/:name",
        component:UserComponent
      },
    ]
  },
  
  {
    path:'servers', 
    // canActivate:[
    //   AuthGuard
    // ],
    canActivateChild:[
      AuthGuard
    ],
    component:ServersComponent,children:[
      {
        path:':id',
        component:ServerComponent,
        resolve:{server: ServerResolver}
      },
      {
        path:':id/edit',
        component:EditServerComponent, canDeactivate:[CanDeactivateGuard]
      }
    ]
  },
  // {
  //   path:'not-found',
  //   component:PageNotFoundComponent
  // },
  {
    path:'not-found',
    component:ErrorPageComponent,
    data:{message:'Page not found'}
  },
  {
    path:'**',
    redirectTo:'/not-found'
  }
  ]
@NgModule({
  imports:[
    // RouterModule.forRoot(appRoutes,{useHash:true})
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}