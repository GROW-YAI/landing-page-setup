# iHospitality Business Consult 

## Project Overview

This is a modern, responsive landing page website for **iHospitality Business Consult**, a business consultancy specializing in the hospitality industry. The website is designed to showcase the company's services, products, and innovations in the hospitality sector.

### Purpose

The website serves as a digital presence for iHospitality Business Consult, providing potential clients with:
- An engaging hero section with a compelling message about revolutionizing hospitality
- Information about the company's products and services
- Details about the innovators behind the business
- A showcase of their work and achievements
- Contact information for inquiries and partnerships

### Main Features

- **Responsive Design**: Built with Tailwind CSS for a fully responsive experience across all devices
- **Smooth Animations**: Uses AOS (Animate On Scroll) and Framer Motion for engaging user interactions
- **Image Carousel**: Hero section features an automatic image slideshow with multiple background images
- **Multi-page Navigation**: Uses React Router for seamless navigation between sections
- **Accessibility**: Integrated with the Boafo Accessibility Widget to make the site accessible to all users, including those with disabilities

### Technologies Used

- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **React Router DOM** - Client-side routing for single-page applications
- **AOS** - Animate On Scroll library for scroll-triggered animations
- **Framer Motion** - Production-ready animation library for React
- **React Icons** - Icon library for React applications
- **Boafo Accessibility Widget** - Accessibility tool to make the website usable for all visitors

### Accessibility

This project uses the [Boafo Accessibility Widget](https://boafo.co) to ensure the website is accessible to all users. The widget provides features like:
- Screen reader support
- Keyboard navigation
- Font size adjustments
- Color contrast options
- And more accessibility enhancements

---

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget in your project, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in if you already have one
3. Navigate to your dashboard
4. Copy your API key from the dashboard

---

## How to Integrate the Boafo Widget

For detailed instructions on integrating the Boafo Accessibility Widget into your project, refer to the official integration guide:

📘 [Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/landing-page-setup.git
   cd landing-page-setup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Open the `.env` file and add your Boafo API key:
   ```
   VITE_BOAFO_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the application**
   
   The application will be available at `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## License

This project is private and proprietary to iHospitality Business Consult.

---

## Support

For any questions or issues, please contact the development team or open an issue in the repository.