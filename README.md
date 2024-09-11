# Sign Language Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
The Sign Language Application is designed to help users learn and practice sign language. It provides a collection of videos demonstrating various signs and allows users to vote on the accuracy of their interpretations.

## Features
- Browse and watch sign language videos
- Vote on the accuracy of sign interpretations
- User authentication and session management
- Responsive design for mobile and desktop

## Installation
To get started with the Sign Language Application, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/sign-language-app.git
    cd sign-language-app
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add the following variables:
    ```env
    DATABASE_URL="your_mongodb_connection_string"
    AUTH_SECRET="your_generated_auth_secret"
    ```

4. **Generate Prisma Client:**
    ```bash
    npx prisma generate
    ```

5. **Run the development server:**
    ```bash
    yarn dev
    ```

## Usage
Once the application is up and running, you can access it at `http://localhost:3000`. Sign in or sign up to start browsing and voting on sign language videos.

## Contributing
We welcome contributions to the Sign Language Application! To contribute, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please contact us at [adarkwagodfred7075@icloud.com](mailto:adarkwagodfred7075@icloud.com).
