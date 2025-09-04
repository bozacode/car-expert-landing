# ProAuto24 Landing Page

A modern, responsive landing page for ProAuto24 - a freelance platform connecting car seekers with car experts in Germany.

## Form Setup Instructions

The forms on this landing page are configured to send emails directly to `info@proauto24.de` using Formspree. Here's how to set it up:

### 1. Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### 2. Create a New Form

1. In your Formspree dashboard, click "New Form"
2. Give it a name like "ProAuto24 Landing Page"
3. Copy the form ID (it will look like `xpzgqkqk`)

### 3. Configure Email Settings

1. In your form settings, set the email address to: `info@proauto24.de`
2. Customize the email subject line (optional)
3. Set up email templates if desired

### 4. Update the Form ID (if needed)

If you get a different form ID from Formspree, update it in the JavaScript code:

```javascript
// In index.html, find this line and replace with your form ID:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
```

### 5. Test the Forms

1. Upload the HTML file to your web server
2. Test each form:
   - Customer registration form
   - Expert registration form  
   - Newsletter signup form
3. Check that emails are received at `info@proauto24.de`

## Features

- **Bilingual Support**: German and English
- **Responsive Design**: Works on all devices
- **Modern UI**: Built with Tailwind CSS
- **Form Validation**: Client-side validation
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Graceful error messages
- **GDPR Compliant**: Cookie consent banner

## Form Types

1. **Customer Registration**: For people looking to buy cars
2. **Expert Registration**: For car experts wanting to join the platform
3. **Newsletter Signup**: For general updates and news

## Technical Details

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Form Handling**: Formspree
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Simply upload the `index.html` file to any web server. The page is self-contained and doesn't require any build process.

## Support

For technical support or questions about the forms, contact: info@proauto24.de # car-expert-landing
