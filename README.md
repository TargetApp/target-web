# target-web

target-web is a core component of TargetApp, a web application designed to diagnose biotic stress in coffee leaves through advanced image analysis. This tool empowers coffee growers by providing accurate and efficient disease identification, helping maintain healthy crops.

## Features
- **Disease Identification**: Upload images of coffee leaves to detect potential diseases.
- **User-Friendly Interface**: Intuitive and accessible design for all users.
- **Mobile-Optimized**: Fully responsive for seamless use on any device.
- **Progressive Web App (PWA)**: Installable for offline usage.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Angular CLI](https://angular.io/cli)
- [Docker](https://www.docker.com/) (optional for containerized deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TargetApp/target-web.git
   cd target-web
   ```
2. Install dependencies:
   ```bash
    npm install
    ```
3. Start the development server:
   ```bash
   ng serve
   ```

The application will be available at http://localhost:4200.

### Deployment
#### Docker
1. Build the Docker image:
   ```bash
   docker build -t target-web .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 80:80 target-web
   ```
#### Production Build
To create a production build, run:
```bash
ng build --prod
```