# Broken Access Control Challenge Instructions

## Overview

In this challenge, you will work with a simple web application that has a security vulnerability related to broken access control.

## Your Tasks

1. **Explore the Application**
   - Start the application with `docker-compose up --build`
   - login with different user accounts (admin and regular user)
   - Understand what functionality exists and who should have access to what

2. **Identify the Vulnerability**
   - Find where a regular user can access functionality they shouldn't be able to
   - Document exactly what the vulnerability is and how it could be exploited

3. **Fix the Vulnerability**
   - Implement proper access controls
   - Make sure to protect both UI access and underlying functionality
   - Test to ensure that regular users can no longer access admin functionality

## What Files to Explore

These files are most relevant to the challenge:
- `src/models/User.ts` - Contains the user model and authentication logic
- `src/app/admin/page.tsx` - The admin dashboard with the vulnerability
- `src/app/users/page.tsx` - The regular user dashboard

## What to submit

Send me via email, teams, or Discord:

1. Description of the vulnerability
2. Your fix (code changes)
3. Show that the page is properly being authenticated


Good luck with the challenge! 