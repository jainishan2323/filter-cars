
# Filter Application using React

 This application is built on React using [create-react-app](https://create-react-app.dev/)


## Getting Started


- Clone Repository.

- Install node. Ensure you have node version **v14+** and npm version **v6+**

- Run `npm install` to install all the dependencies.


## Running the app
For **Development** mode, run:

```js
npm start
```
The app will start on http://localhost:3000


## Application architecture
The default development branch is `develop`. All new feature changes are to be merged in this branch before pushing to production branch which is `master`.

### Libraries and Framework used:
1. App uses [React](https://reactjs.org/) for building UI components. This is our **View Layer**.
2. For server state management and caching data app uses [React Query](https://react-query.tanstack.com/).
3. [Axios](https://axios-http.com/) is used as primary HTTP client for api fetching. This is our **Model**
4. [styled-components](https://styled-components.com/) are used for overall app styling. The pattern used is `css-in-js`.

### Folder structure

**api**: Contains api related logic and requestor functions based on each api. Also contains formatter functions to parse api data.
**components**: Contains list of common components like `<Header />`,  `<Footer />`, `<Button />`, `<AppLayout />`.
**constants**: Common app level constants.
**hooks**: Contains react query hooks for fetching data. Contains common hook for react.
**pages**: This contains folders with files of our major app routes.
Create new route component inside this folder.
**routes**: All our app routes are provided here.
**types**: Contains common app types and overrides.
**utils**: Common app level util functions are to be added here.

## Testing

You can test application by running

```js
npm test
```

Add more test cases inside `__tests__` folder.