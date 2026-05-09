# EmailJS Setup Instructions

## Steps to Configure Contact Form

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Add Email Service**
   - Go to Email Services
   - Click "Add New Service"
   - Choose Gmail (or your preferred email provider)
   - Connect your Gmail account (shanjidahmed66@gmail.com)
   - Note the Service ID

3. **Create Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Use this template:
   
   ```
   Subject: {{subject}}
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
   
   - Note the Template ID

4. **Get Public Key**
   - Go to Account > General
   - Find your Public Key

5. **Create .env File**
   - Copy `.env.example` to `.env`
   - Add your credentials:
   
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

6. **Restart Dev Server**
   ```bash
   npm run dev
   ```

Now your contact form will send emails directly to shanjidahmed66@gmail.com!
