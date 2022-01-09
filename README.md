# InvoiceApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

Creates the total of an invoice while adding items to the list. ![image](https://user-images.githubusercontent.com/44347390/148699302-b52f6243-afc8-4969-b89d-e0ec17529a99.png)

You can add more items adding a new object with a name and a price.

![image](https://user-images.githubusercontent.com/44347390/148699343-b7fc7600-1d21-4d73-9fa3-0cccd7d2d83d.png)
![image](https://user-images.githubusercontent.com/44347390/148699360-8f720f96-4f6c-46a4-989f-0c9d97bec8cb.png)

The new item is added to the list and the total is automatically recalculated.

Furthermore, if the object is deleted it is subtracted from the total.

![image](https://user-images.githubusercontent.com/44347390/148699414-1b7762ff-eca6-45ac-9e91-771bb8c51186.png)

Finally, if you click on the name of an item, it is disabled (crossed out). This causes its price to be subtracted from the total, but does not remove the item in case you want to re-enable it later, adding it back to the total.

![image](https://user-images.githubusercontent.com/44347390/148699466-ad15ea7d-520a-49ec-b210-15a5b4cf0817.png)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
