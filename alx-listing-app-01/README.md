

---

# ALX Listing App Detail

A **responsive Property Detail Page** built with **Next.js** and **Tailwind CSS**, showcasing property information, amenities, reviews, and a booking section. This project demonstrates modular React components, dynamic routing, and responsive design for web applications.

---

## **Table of Contents**

* [Project Overview](#project-overview)
* [Features](#features)
* [Folder Structure](#folder-structure)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Components](#components)
* [Screenshots](#screenshots)
* [License](#license)

---

## **Project Overview**

The ALX Listing App Detail project implements a **property detail page** similar to Airbnb. Users can:

* View property information (name, rating, location)
* Browse property images in a responsive grid
* Read descriptions and host details
* See amenities offered
* Check reviews with user avatars and ratings
* Make bookings with dynamic total calculation

This page is **fully responsive**, optimized for mobile and desktop screens.

---

## **Features**

* **Dynamic Routing**: Pages generated dynamically using Next.js `[id].tsx`
* **Responsive Layout**: Tailwind CSS for mobile-first design
* **Reusable Components**: `PropertyDetail`, `BookingSection`, `ReviewSection`
* **Dynamic Booking**: Calculates total cost based on selected check-in and check-out dates
* **Reviews Section**: User avatars, ratings, and comments
* **Amenities List**: Displays property features and services

---

## **Folder Structure**

```
alx-listing-app-01/
│
├─ pages/
│   └─ property/
│       └─ [id].tsx           # Dynamic property page
│
├─ components/
│   └─ property/
│       ├─ PropertyDetail.tsx # Main property details
│       ├─ BookingSection.tsx # Booking component with date picker
│       └─ ReviewSection.tsx  # Reviews listing component
│
├─ constants/
│   └─ index.ts               # Sample property data
│
└─ interfaces/
    └─ index.ts               # TypeScript interfaces for type safety
```

---

## **Technologies Used**

* **[Next.js](https://nextjs.org/)** – React framework for server-side rendering and dynamic routing
* **[React](https://reactjs.org/)** – Component-based UI library
* **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for responsive design
* **TypeScript** – Type safety and better development experience

---

## **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/alx-listing-app-detail.git
cd alx-listing-app-detail
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**

Navigate to [http://localhost:3000/property/Ocean%20View%20Apartment](http://localhost:3000/property/Ocean%20View%20Apartment) (replace with a property name in your sample data).

---

## **Usage**

* Browse properties using the **dynamic URL** `/property/[id]`
* View property details, amenities, and reviews
* Select **check-in/check-out dates** in the booking section
* Total payment updates dynamically based on selected dates
* Click **Reserve now** to simulate a booking

---

## **Components**

### **1. PropertyDetail**

* Displays property name, rating, location, description, images, and amenities
* Integrates `BookingSection` and `ReviewSection` for a full detail page

### **2. BookingSection**

* Date pickers for check-in and check-out
* Calculates total payment (`price × number of nights`)
* “Reserve now” button

### **3. ReviewSection**

* Maps over reviews array to display user avatars, names, ratings, and comments

---

## **Screenshots**

**Property Detail Page (Desktop)**
![Desktop view](screenshots/desktop.png)

**Property Detail Page (Mobile)**
![Mobile view](screenshots/mobile.png)

---

## **License**

This project is **MIT licensed** – see the [LICENSE](LICENSE) file for details.

---

