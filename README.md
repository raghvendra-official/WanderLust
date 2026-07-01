# 🌍 WanderLust – Full Stack Travel Accommodation Platform with DevOps Automation

![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Express.js](https://img.shields.io/badge/Express.js-black)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-green)
![Docker](https://img.shields.io/badge/Docker-2496ED)
![Terraform](https://img.shields.io/badge/Terraform-623CE4)
![Ansible](https://img.shields.io/badge/Ansible-EE0000)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-blue)
![AWS EC2](https://img.shields.io/badge/AWS-EC2-orange)

A production-ready full-stack travel accommodation platform, featuring a complete DevOps automation pipeline using **Docker**, **GitHub Actions**, **Terraform**, **AWS EC2**, and **Ansible**.

---

## 🔗 Quick Links

- 🌐 **Live Demo:** https://wanderlust-5c2r.onrender.com/listings
- 🐳 **Docker Hub:** https://hub.docker.com/r/raghvendraofficial/wanderlust
- 💻 **Source Code:** https://github.com/raghvendra-official/WanderLust

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [System Architecture](#-system-architecture)
- [CI/CD Workflow](#-cicd-workflow)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Docker Deployment](#-docker-deployment)
- [Terraform Deployment](#-terraform-deployment)
- [Ansible Deployment](#-ansible-deployment)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

# 📖 Overview

WanderLust is a full-stack travel accommodation platform where users can discover, create, and manage travel listings. It includes secure authentication, image uploads, reviews, wishlists, and interactive maps.

The project also demonstrates a **production-ready DevOps workflow**, including:

- Containerization with Docker
- CI/CD automation using GitHub Actions
- Infrastructure provisioning with Terraform
- Automated server configuration using Ansible
- Deployment to AWS EC2

This project showcases both **Full Stack Development** and **DevOps Engineering** practices.

---

# ✨ Features

## 🏡 Application Features

- Secure user authentication
- Google OAuth login
- Create, edit, and delete listings
- Property reviews and ratings
- Wishlist management
- Newsletter subscription
- Cloudinary image uploads
- Interactive maps using Mapbox
- Responsive Bootstrap UI

---

## ⚙️ DevOps Features

- Docker containerization
- Docker Compose support
- GitHub Actions CI/CD pipeline
- Docker Hub integration
- Terraform Infrastructure as Code
- AWS EC2 provisioning
- Ansible server configuration
- Ansible Vault for secrets management
- Health check endpoints

---

# 🏗️ System Architecture

The application follows a modern deployment architecture:

- Developers push code to GitHub.
- GitHub Actions automatically builds the Docker image.
- The image is pushed to Docker Hub.
- Terraform provisions AWS infrastructure.
- Ansible configures the EC2 instance and deploys the latest Docker image.
- Users access the application hosted on AWS.

![System Architecture](docs/screenshots/Sys_Arch.png)

---

# 🚀 CI/CD Workflow

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ▼
Build Docker Image
    │
    ▼
Push Image to Docker Hub
    │
    ▼
Terraform Provision AWS Infrastructure
    │
    ▼
Ansible Configure EC2 & Deploy
    │
    ▼
Application Running on AWS EC2
```

---

# 🛠️ Tech Stack

## Frontend

- HTML
- CSS
- Bootstrap
- JavaScript
- EJS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport.js

## DevOps

- Docker
- Docker Compose
- GitHub Actions
- Terraform
- AWS EC2
- Ansible
- Docker Hub

## Cloud Services

- Cloudinary
- Mapbox

---

# 📂 Project Structure

```text
WanderLust/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── terraform/
├── ansible/
├── .github/
│   └── workflows/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env.example
└── README.md
```

---

# 📋 Prerequisites

Before running the project, make sure you have installed:

- Node.js (v22 or later)
- npm
- Docker
- Docker Compose
- Terraform
- Ansible
- MongoDB Atlas Account
- Cloudinary Account
- Google OAuth Credentials
- AWS Account

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/your-username/WanderLust.git
cd WanderLust
```

## Install dependencies

```bash
npm install
```

## Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Update all the required values inside `.env`.

## Run the application

```bash
npm start
```

The application will be available at:

```
http://localhost:8080
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
ATLASDB_URL=

CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=

MAP_TOKEN=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

SECRET=

PORT=8080
```

---

# 🐳 Docker Deployment

Build the Docker image:

```bash
docker build -t wanderlust .
```

Run the container:

```bash
docker run -p 8080:8080 wanderlust
```

Or use Docker Compose:

```bash
docker-compose up --build
```

---

# ☁️ Terraform Deployment

Initialize Terraform:

```bash
terraform init
```

Review the execution plan:

```bash
terraform plan
```

Provision infrastructure:

```bash
terraform apply
```

Destroy infrastructure:

```bash
terraform destroy
```

---

# 🤖 Ansible Deployment

Run the deployment playbook:

```bash
ansible-playbook playbook.yml --ask-vault-pass
```

---

# 📸 Screenshots

## 🏠 Landing Page

![Landing Page](docs/screenshots/home.png)

---

## 🐳 Docker Hub

![Docker Hub](docs/screenshots/docker_hub.png)

---

## ⚙️ GitHub Actions

![GitHub Actions](docs/screenshots/github_action.png)

---

## ☁️ AWS EC2

![AWS EC2](docs/screenshots/aws_ec2.png)

---

# 🚀 Future Improvements

- Kubernetes deployment
- Nginx Reverse Proxy
- HTTPS with SSL Certificates
- Redis caching
- Prometheus monitoring
- Grafana dashboards
- AWS ECS deployment
- Blue-Green deployment strategy

---

# 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Raghvendra Pandey**

GitHub: https://github.com/raghvendra-official

LinkedIn: https://linkedin.com/in/your-profile

---

⭐ If you found this project useful, consider giving it a star!
