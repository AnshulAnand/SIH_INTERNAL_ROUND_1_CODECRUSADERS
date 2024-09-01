## Tasks Accomplished

- [x]**Authentication**: It provides user authentication via `email & password` which makes it a secure & user friendly app
- [x] **Spreadsheet Editor**: Platform provides a beautiful spreadsheet editor for editing files with all core functionalities of a editor
- [x] **Core Spreadsheet Functionality**: Our editor provides all core functionalities of editing a spreadsheet
- [x] **Real-time updates**: All users using the same spreadsheet file at the same time will get live editing updates via `WebSockets`
- [x] **Responsive User Interface**: The platform is majorly responive to screen sizes and devices

## Technology Stack

This project leverages the following technologies:

- **[JavaScript & TypeScript](https://www.typescriptlang.org/):** Works on both backend & frontend and type safety with typescript
- **[ReactJS](https://react.dev/):** Excellent frontend framework to work with and has lots of supporting libraries
- **[ExpressJS](https://expressjs.com/):** A lightweight backend framework with which we can build apis really fast (much needed)
- **[Socket.io](https://socket.io/):** Most popular web socket library with tons of support and documentation
- **[MongoDB](https://www.mongodb.com/):** Mongodb goes well with express and in general JS language
- **[Tailwindcss](https://tailwindcss.com/):** Really flexible styling library which provides tons of prebuilt classes ready to be used in project

## Key Features

- **Authentication**: It provides user authentication via `email & password` which makes it a secure & user friendly app
- **Dashboard**: An user is granted a dashboard where he can make spreadsheet files & grant permissions for collaboration
- **Spreadsheet Editor**: Platform provides a beautiful spreadsheet editor for editing files with all core functionalities of a editor
- **Core Spreadsheet Functionality**: Our editor provides all core functionalities of editing a spreadsheet
- **Real-time updates**: All users using the same spreadsheet file at the same time will get live editing updates via `WebSockets`
- **Responsive User Interface**: The platform is majorly responive to screen sizes and devices

## Local Setup Instructions (Write for both windows and macos)

Follow these steps to run the project locally

- clone the repository using the command

```
git clone https://github.com/AnshulAnand/SIH_INTERNAL_ROUND_1_CODECRUSADERS.git
```

- change directory in code

```
cd code
```

- in code directory, you'll find two directories, one for backend & one for frontend, in both directories change the filename from `.env.example` to `.env`

- now while being in the `code` directory, install dependencies in both frontend & backend:

frontend:

```
cd spreadsheet-editor-frontend
npm install
```

backend:

```
cd ..
cd spreadsheet-editor-backend
npm install
```

- now run both frontend & backend, make sure you're in `code` directory:

frontend:

```
cd spreadsheet-editor-frontend
npm run dev
```

backend:

```
cd ..
cd spreadsheet-editor-backend
npm run dev
```
