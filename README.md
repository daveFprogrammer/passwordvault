# Password Vault Web Application

This web application allows users to securely manage their passwords. Each user can create an account, log in, and view, add, or delete their own passwords within a personal area.

## Features

- **User Registration and Login**: Create an account, log in, and access only personal data.
- **Password Management**: Save, view, and delete personal passwords.
- **Security Key Generation**: Generate a random security key or customize it using specific parameters.
- **Data Security**: Password data is accessible only to the owner.

## Tech Stack

- **Backend**: Django + Django REST Framework
- **Frontend**: React + Axios
- **Styling**: Tailwind CSS
- **Authentication**: Token-based (JWT)

## Prerequisites

Make sure you have the following tools installed:

- Python (3.x)
- Node.js (and npm)
- Django
- Django REST Framework
- React
- Tailwind CSS

## Installation

### 1. Clone the Project

```bash
git clone https://github.com/daveFprogrammer/passwordvault.git
cd passwordvault
```

### 2. Django Backend Setup

1. **Create a Virtual Environment**: Navigate to the backend directory and create a virtual environment.

   ```bash
   cd backend
   python3 -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

2. **Install Python Dependencies**: Install required packages from `requirements.txt`.

   ```bash
   pip install -r requirements.txt
   ```

3. **Apply Migrations**: Navigate to the backend Django application and set up the database with initial migrations.

   ```bash
   cd backend
   python manage.py migrate
   ```

4. **Create Superuser (Optional)**: Create a superuser account to access Django's admin panel if needed.

   ```bash
   python manage.py createsuperuser
   ```

5. **Run the Django Server**: Start the development server.

   ```bash
   python manage.py runserver
   ```

### 3. React Frontend Setup

1. **Navigate to the Frontend Directory**: Go to the `frontend` directory within the project.

   ```bash
   cd frontend
   ```

2. **Install Dependencies**: Use npm to install necessary packages.

   ```bash
   npm install
   ```

3. **Run the React Development Server**: Start the frontend server to serve the React app.

   ```bash
   npm start
   ```

### 4. Access the Application

- Django backend will be available at [http://localhost:8000](http://localhost:8000).
- React frontend will be available at [http://localhost:3000](http://localhost:3000).

## Development Notes

- **Authentication**: Use JWT tokens for user authentication, storing them securely.
- **API**: APIs are protected, so each request requires an authentication token. Axios is configured to automatically add the token.
