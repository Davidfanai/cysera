# 🧼 CYSERA Cleaning Services

> *"Everything Beautiful in Its Time"* — **Ecclesiastes 3:11**

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?logo=tailwindcss&logoColor=white)
![ABN Verified](https://img.shields.io/badge/ABN-50_471_908_668-emerald)

The official web application for **CYSERA Cleaning Services**, Melbourne's trusted local cleaning professionals serving Bayswater North and the broader Eastern Suburbs of Melbourne, Victoria.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Services Offered](#-services-offered)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Company & Contact Info](#-company--contact-info)
- [License](#-license)

---

## 🌟 Overview

CYSERA Cleaning Services delivers top-tier residential, commercial, carpet steam, and specialized cleaning with uncompromised reliability, transparent pricing, and 100% eco-friendly products. This web application provides customers with instant quotes, service breakdowns, interactive before & after transformation comparisons, service area lookup, and direct booking request workflows.

---

## 🚀 Key Features

- 🧮 **Interactive Instant Quote Calculator**: Dynamic price estimates based on property size, service type, cleaning frequency, and add-on services.
- 🖼️ **Before & After Transformation Gallery**: Interactive image sliders demonstrating real cleaning results.
- 📍 **Service Suburb & Postcode Checker**: Instant search tool to verify coverage across Melbourne's Eastern Suburbs.
- 📱 **Integrated Social Feed**: Highlights customer transformations and direct links to official Facebook & Instagram pages.
- 💬 **Instant Quote & Booking Modal**: Seamless booking requests connected via WhatsApp and phone call triggers.
- 🏷️ **First Clean Promotion**: Integrated 20% discount offer banner and claim flow for new clients.
- ⚡ **Ultra-Fast & Responsive**: Mobile-first design built with Tailwind CSS v4 and Vite HMR.

---

## 🧹 Services Offered

| Service | Description |
| :--- | :--- |
| **Residential House Cleaning** | Regular domestic cleaning (weekly, fortnightly, or monthly) tailored for busy families. |
| **End of Lease Cleaning** | 100% Bond Return Guarantee clean for tenants and property managers. |
| **Commercial & Office Cleaning** | High-grade workspace sanitization, trash removal, and surface care for offices and shops. |
| **Carpet Steam Cleaning** | Deep hot water extraction for pet stains, odours, and allergen removal. |
| **Deep Intensive Cleaning** | Thorough spring cleaning covering ovens, rangehoods, grout, and high-touch areas. |
| **Solar Panel Cleaning** | Pure water wash to restore solar energy output and panel efficiency. |

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
- **Iconography**: [Lucide React](https://lucide.dev/) + Custom SVG Social Icons
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
cysera-cleaning/
├── src/
│   ├── assets/              # Static assets & brand media
│   ├── components/          # Reusable UI components
│   │   ├── BeforeAfterSlider.tsx  # Interactive image comparison slider
│   │   ├── CyseraLogo.tsx         # Brand logo component
│   │   ├── Footer.tsx             # Site footer with service links & social links
│   │   ├── Header.tsx             # Sticky navigation bar with mobile drawer
│   │   ├── MarqueeTicker.tsx      # Promotional ticker banner
│   │   ├── PricingCalculator.tsx  # Instant quote estimation tool
│   │   ├── QuoteModal.tsx         # Quick quote inquiry popup
│   │   ├── ScrollReveal.tsx       # Animation wrapper component
│   │   ├── SocialFeed.tsx         # Transformation gallery & social integration
│   │   ├── SocialIcons.tsx        # Facebook, Instagram & WhatsApp SVG icons
│   │   └── SuburbSearch.tsx       # Suburb coverage search bar
│   ├── data/                # Static datasets
│   │   ├── galleryData.ts     # Before & after photo showcase data
│   │   ├── reviewsData.ts     # Customer testimonials
│   │   ├── servicesData.ts    # Service details & pricing tiers
│   │   └── suburbsData.ts     # Covered Eastern Suburbs list
│   ├── pages/               # Main application pages
│   │   ├── AboutPage.tsx      # Company story, credentials & social links
│   │   ├── ContactPage.tsx    # Contact form, operating hours & phone details
│   │   ├── GalleryPage.tsx    # Full transformation gallery
│   │   ├── HomePage.tsx       # Hero, feature highlights & quick booking
│   │   ├── PricingPage.tsx    # Transparent rate breakdown & calculator page
│   │   └── ServicesPage.tsx   # Detailed service catalog
│   ├── App.tsx              # Main application router & state container
│   ├── index.css            # Global Tailwind CSS imports & custom styles
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0 or higher) installed on your system.

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd D:\Projects\cysera-cleaning
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### Type Checking & Linting

Run TypeScript type verification:
```bash
npx tsc --noEmit
```

Run Oxlint:
```bash
npm run lint
```

### Production Build

Build the production-ready bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📞 Company & Contact Info

- **Business Name**: CYSERA Cleaning Services
- **ABN**: `50 471 908 668` (Fully Insured & Police Checked)
- **Base Location**: Bayswater North, VIC 3153
- **Service Area**: Eastern Suburbs, Melbourne
- **Phone / WhatsApp**:
  - `0475 436 637`
  - `0474 780 469`
- **Email**: `contact@cysera.com.au`
- **Operating Hours**: Monday – Saturday: 7:00 AM – 8:00 PM *(Closed Sundays)*
- **Official Social Media**:
  - 📘 **Facebook**: [CYSERA Cleaning Services on Facebook](https://www.facebook.com/share/19FJYRjeT6/?mibextid=wwXIfr)
  - 📸 **Instagram**: [@cyseracleaningservices on Instagram](https://www.instagram.com/cyseracleaningservices?utm_source=qr&wa_status_inline=true)

---

## 📄 License

© 2026 **CYSERA Cleaning Services** (ABN 50 471 908 668). All rights reserved. Private commercial software.