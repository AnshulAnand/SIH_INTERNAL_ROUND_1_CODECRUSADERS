# AI for Developer Productivity: Backend Developer

This README provides an overview of the project, including team details, relevant links, tasks completed, tech stack, key features, and steps to run the project locally.

## Team Details

**Team Name:** CODECRUSADERS

**Team Leader:** [@Akhilesh6007](https://github.com/Akhilesh6007)

**Team Members:**

- **Akhilesh Kumar** - 2023UCB6007 - [@Akhilesh6007](https://github.com/Akhilesh6007)
- **Anshul Anand** - 2023UCB6004 - [@AnshulAnand](https://github.com/AnshulAnand)
- **Abdul Raqeeb** - ROLL_NUMBER - [@USERNAME](https://github.com/USERNAME)
- **Aryan** - ROLL_NUMBER - [@USERNAME](https://github.com/USERNAME)
- **Abhisekh** - ROLL_NUMBER - [@USERNAME](https://github.com/USERNAME)
- **Divya** - ROLL_NUMBER - [@USERNAME](https://github.com/USERNAME)

## Project Details

This project is built under the problem statment `Building a Modern Version of SocialCalc using Node.js, Go, or Django` provided for SIH round of internal hackathon. It aims at providing a platform where people can make & edit spreadsheets and collaborate with others while doing so. Here are the key details of our project:

- **Authentication**: It provides user authentication via `email & password` which makes it a secure & user friendly app
- **Dashboard**: An user is granted a dashboard where he can make spreadsheet files & grant permissions for collaboration
- **Spreadsheet Editor**: Platform provides a beautiful spreadsheet editor for editing files with all core functionalities of a editor
- **Real-time updates**: All users using the same spreadsheet file at the same time will get live editing updates via `WebSockets`

## Tech Stack

This project is built using the modern technologies like the MERN stack:

- **JavaScript & TypeScript**: Project uses JavaScript and TypeScript programming languages for frontend and backend respectively
- **ReactJS**: The frontend of this project is built using ReactJS (using `Vite`)
- **ExpressJS**: The backend is built using the ExpressJS framework of NodeJS
- **Socket.io**: It uses socket.io for WebSockets in order to provide live collaboration functionality
- **MongoDB**: The Database used in this project is MongoDB
- **Tailwindcss**: Tailwind for styling the frontend
- **Axios**: Axios for data fetching in Frontend

## Run Project

Follow the these steps in order to run this project locally on your machine

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

## Project Links

- **Internal Presentation:** [Internal Presentation](URL TO PPT UPLOADED TO GITHUB)
- **Final SIH Presentation:** [Final SIH Presentation](URL TO PPT UPLOADED TO GITHUB)
- **Video Demonstration:** [Watch Video](UNLISTED YOUTUBE LINK)
- **Live Deployment:** [View Deployment](DEPLOYED LINK IF ANY)
- **Source Code:** [GitHub Repository](GITHUB LINK TO THE REPO)
- **Additional Resources:** [Other Relevant Links](ANY OTHER RELEVANT LINKS)
