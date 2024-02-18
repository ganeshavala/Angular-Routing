# AppRoutingModule

This is an Angular module named `AppRoutingModule`.

## Routes

The `appRoutes` constant defines the routes for the web application. It uses the Angular Router module to map different URL paths to specific components. Here's a breakdown of each route:

- The first route maps the empty path to the `HomeComponent`.
- The second route maps the path 'users' to the `UsersComponent` and defines a child route for 'users/:id/:name' that maps to the `UserComponent`.
- The third route maps the path 'servers' to the `ServersComponent` and defines child routes for 'servers/:id' that maps to the `ServerComponent` and 'servers/:id/edit' that maps to the `EditServerComponent`.
- The fourth route maps the path 'not-found' to the `ErrorPageComponent` and provides data with the message 'Page not found'.
- The last route redirects any unmatched paths to '/not-found'.

## NgModule

The `@NgModule` decorator provides metadata about the module:

- **Imports**: The `RouterModule.forRoot(appRoutes,{useHash:true})` method is used to configure the router at the application's root level with the `appRoutes`. The `{useHash:true}` option enables the use of the hash style URLs.
- **Exports**: The `RouterModule` is exported so that it can be used in other modules that import the `AppRoutingModule`.

## Functionality

This module configures the routes for the application and exports the `RouterModule` so that the routing functionality can be used in other modules.

--------------------------------------------------

# AuthService

This is a service class named `AuthService` in Angular.

## Properties

- `loggedIn`: A boolean property initialized with `false`. It represents the login status.

## Methods

- `isAuthenticated()`: This method returns a Promise that resolves after 800 milliseconds with the value of the `loggedIn` property. It's used to simulate the delay of an actual authentication request.

- `login()`: This method sets the `loggedIn` property to `true`, indicating that the user is logged in.

- `logout()`: This method sets the `loggedIn` property to `false`, indicating that the user is logged out.

## Functionality

This service provides a simple way to manage authentication status in an Angular application. It allows you to check if the user is authenticated, and to log in and log out.

--------------------------------------------------


# AuthGuard

This is an Angular guard class named `AuthGuard`.

## Properties

- `authService`: An instance of `AuthService` injected via the constructor.
- `router`: An instance of `Router` injected via the constructor.

## Methods

- `canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)`: This method checks if the user is authenticated by calling `this.authService.isAuthenticated()`. If the user is authenticated, it returns `true`. Otherwise, it navigates to the root route (`'/'`) and implicitly returns `false`.

- `canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)`: This method is similar to `canActivate` but is used to check whether the user can activate a child route.

## Functionality

This guard provides a way to protect routes and child routes based on the user's authentication status. It uses the `AuthService` to check if the user is authenticated and the `Router` to navigate to the root route if the user is not authenticated.


# Server Resolver Service

This service is part of an Angular application. It uses the `Resolve` interface from Angular's router package to ensure server data is available before a route is activated.

## Code Overview

The `ServerResolver` class is decorated with `@Injectable()`, marking it as a provider for dependency injection.

It implements the `Resolve` interface, specifically for resolving `Server` data. The `Server` interface represents a server with properties: `id`, `name`, and `status`.

The `resolve` method retrieves a server from the `ServersService` based on the route parameters. It returns an `Observable<Server>`, `Promise<Server>`, or `Server`.

## Usage

This service is used in route configurations via the `resolve` property. When a route associated with this resolver is activated, the `resolve` method is called, fetching the necessary server data.


# EditServerComponent

This is an Angular component named `EditServerComponent`.

## Properties

- `server`: An object that represents a server with properties `id`, `name`, and `status`.
- `serverName` and `serverStatus`: String properties to hold the server name and status.
- `allowEdit`: A boolean property to determine if editing is allowed.
- `changesSaved`: A boolean property to determine if changes have been saved.

## Constructor

The constructor function injects the `ServersService`, `ActivatedRoute`, and `Router` services.

## ngOnInit Method

The `ngOnInit` method is a lifecycle hook that is called after Angular has initialized all data-bound properties of the component. In this method:

- It logs the current snapshot query parameters and fragment of the route.
- It subscribes to the `queryParams` observable of the route. This means whenever the `queryParams` of the route changes, the callback provided to `subscribe` will be executed. In this callback, it updates `allowEdit` to the `allowEdit` property of the new query parameters.
- It retrieves the server with the id from the route's snapshot parameters and assigns it to `this.server`. It also updates `this.serverName` and `this.serverStatus` with the server's name and status.

## onUpdateServer Method

The `onUpdateServer` method updates the server with the new name and status, sets `changesSaved` to `true`, and navigates to the parent route.

## canDeactivate Method

The `canDeactivate` method checks if the user can deactivate the route based on whether editing is allowed and whether there are unsaved changes.

## Functionality

This component provides a way to edit a server's name and status. It uses the `ServersService` to retrieve and update the server, the `ActivatedRoute` to get the route's parameters and query parameters, and the `Router` to navigate to the parent route.
<br/>

# Can Deactivate Guard

This guard is part of an Angular application. It uses the `CanDeactivate` interface from Angular's router package to determine if a component can be deactivated.

## Code Overview

The `CanDeactivateGuard` class implements the `CanDeactivate` interface. It checks if a component can be deactivated based on the component's `canDeactivate` method.

The `CanComponentDeactivate` interface defines the `canDeactivate` method that should be implemented by components using this guard. The method should return an `Observable<boolean>`, `Promise<boolean>`, or `boolean`.

## Usage

This guard is used in route configurations via the `canDeactivate` property. When a route associated with this guard is being navigated away from, the `canDeactivate` method is called, checking if the navigation can proceed.


# ErrorPageComponent

This is an Angular component named `ErrorPageComponent`.

## Component Metadata

- **Selector**: 'app-error-page'
- **Template URL**: './error-page.component.html'
- **Style URL**: './error-page.component.css'

## Properties

- `errorMessage`: A string property initialized with "Page Not Found".

## Constructor

The constructor function injects the `ActivatedRoute` service, which provides information about the route linked to the instance of `ErrorPageComponent`.

## ngOnInit Method

The `ngOnInit` method is a lifecycle hook that is called after Angular has initialized all data-bound properties of the component. In this method:

- It logs the current snapshot data of the route.
- It sets `errorMessage` to the `message` property of the route's snapshot data.
- It also subscribes to the `data` observable of the route. This means whenever the `data` of the route changes, the callback provided to `subscribe` will be executed. In this callback, it updates `errorMessage` to the `message` property of the new data.

## Functionality

This component displays an error message that can be updated based on the data of the route it's linked to. The initial message is "Page Not Found", but it can change if the route's data has a `message` property.
