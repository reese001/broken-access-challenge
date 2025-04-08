# Security Demo App: Broken Access Control Challenge

This is a simple Next.js demo application created to demonstrate and teach about broken access control vulnerabilities. The app has an intentional security vulnerability that students should identify and fix.

## About the App

This is a basic user management system with:
- A list of users
- A login system
- An admin dashboard with the ability to delete users

### Installation

1. Clone this repository
```bash
git clone git@github.com:reese001/broken-access-challenge.git
```

2. Install dependencies
```bash
npm install
```

3. Run docker-compose
```bash
docker-compose up --build
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use the App

1. The home page provides links to the main pages
2. You can log in as either:
   - Username: `admin` (admin role)
   - Username: `user1` (regular user)
   - Any password will work (for demo purposes)
3. Try to access the admin dashboard and perform admin actions with a regular user account
4. Identify where the vulnerability exists in the code

