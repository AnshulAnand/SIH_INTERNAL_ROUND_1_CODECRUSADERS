# AI for Developer Productivity: Backend Developer

This README provides an overview of the project, including team details, relevant links, tasks completed, tech stack, key features, and steps to run the project locally.

## Team Details

**Team Name:** CODECRUSADERS

**Team Leader:** [@Akhilesh6007](https://github.com/Akhilesh6007)

**Team Members:**

- **Akhilesh Kumar** - 2023UCB6007 - [@Akhilesh6007](https://github.com/Akhilesh6007)
- **Anshul Anand** - 2023UCB6004 - [@AnshulAnand](https://github.com/AnshulAnand)
- **Abdul Raqeeb** - 2023UCB6048 - [@Raqeeb786](https://github.com/Raqeeb786)
- **Aryan** - 2023UCB6021 - [@A-Y-S-16](https://github.com/A-Y-S-16)
- **Abhisekh** - 2023UCB6054 - [@abhishekk-04](https://github.com/abhishekk-04)
- **Divya** - 2023UCB6023 - [@divya123-haves](https://github.com/divya123-haves)

## Project Details

This project is built under the problem statment `Building a Modern Version of SocialCalc using Node.js, Go, or Django` provided for SIH round of internal hackathon. It aims at providing a platform where people can make & edit spreadsheets and collaborate with others while doing so. Here are the key details of our project:

- **Authentication**: It provides user authentication via `email & password` which makes it a secure & user friendly app
- **Dashboard**: An user is granted a dashboard where he can make spreadsheet files & grant permissions for collaboration
- **Spreadsheet Editor**: Platform provides a beautiful spreadsheet editor for editing files with all core functionalities of a editor
- **Core Spreadsheet Functionality**: Our editor provides all core functionalities of editing a spreadsheet
- **Real-time updates**: All users using the same spreadsheet file at the same time will get live editing updates via `WebSockets`
- **Responsive User Interface**: The platform is majorly responive to screen sizes and devices

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

- **Internal Presentation:** [Internal Presentation](files/Internal_PPT_CODECRUSADERS.pdf)
- **Final SIH Presentation:** [Final SIH Presentation](files/SIH_PPT_CODECRUSADERS.pdf)
- **Video Demonstration:** [Watch Video](https://youtu.be/2ii-CUJYWzM?si=VnFh0mYLvzeGncDH)
- **Live Deployment:** [View Deployment](DEPLOYED LINK IF ANY)
- **Source Code:** [GitHub Repository](code)
- **Additional Resources:** [Other Relevant Links](ANY OTHER RELEVANT LINKS)
