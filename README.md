# Computer Engineering App

This is a computer engineering app built using Vite, React, Bootstrap, and React-Bootstrap. The app provides various features and information related to computer engineering.

## Project Structure

The project structure is as follows:

```
src
├── App.jsx
├── components
│   ├── appPosts
│   │   ├── Author.jsx
│   │   ├── PostCard.jsx
│   │   ├── posts.css
│   │   ├── Posts.jsx
│   │   └── Select.jsx
│   ├── groupActions
│   │   ├── groupActions.css
│   │   └── GroupActions.jsx
│   ├── index.js
│   ├── landing
│   │   ├── landing.css
│   │   ├── Landing.jsx
│   │   └── User.jsx
│   └── userInfo
│       ├── Location.jsx
│       ├── RecommendedGroups.jsx
│       ├── userInfo.css
│       └── UserInfo.jsx
├── index.css
└── main.jsx
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/shahinovic/computer-engineering.git
   ```

2. Install the dependencies:

   ```shell
   cd computer-engineering
   npm install
   ```

3. Start the development server:

   ```shell
   npm run dev
   ```

   The app will be accessible at `http://localhost:3000`.

## Features

The app includes the following features:

- The landing page (`Landing.jsx`) displays information about computer engineering and user profiles (`User.jsx`).
- The user information page (`UserInfo.jsx`) shows details about a specific user, including their location (`Location.jsx`) and recommended groups (`RecommendedGroups.jsx`).
- The app posts section (`Posts.jsx`) allows users to view and filter posts (`PostCard.jsx`) and provides an author component (`Author.jsx`) and a select component (`Select.jsx`).
- The group actions section (`GroupActions.jsx`) provides various actions related to groups.

## Styling

The app uses Bootstrap and React-Bootstrap for styling. CSS files are available for custom styling of individual components.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize the README file according to your specific project requirements and provide more details about the functionalities and purpose of your computer engineering app.
