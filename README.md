# Shop Project

This is a React project built with **Vite**, a small demo online shop.  
The site works locally with **JSON Server** to simulate a database, but on Netlify or other static hosts, the products will not be visible without an external API.

## Live Demo

You can see the live site here (products will only show locally):

[https://eshop-demo1.netlify.app/](https://eshop-demo1.netlify.app/)


<img width="1295" height="858" alt="image" src="https://github.com/user-attachments/assets/9231a1a5-ed3f-4c54-af8c-5817ea5cc74b" />


---

## Features

- Display products from `db.json` (local only)
- Uses **React Router** for navigation
- Styled with **Styled Components**
- Product filtering and sorting
- Responsive design for desktop and mobile

---

## Installation

1. Clone the project:

```bash
git clone https://github.com/your-username/shop-project.git
cd shop-project
```

2. Install dependencies:
```bash
npm install
```

3. Install any additional packages if needed:
```bash
npm install styled-components json-server react-router-dom
```

4. Start JSON Server to serve the local database:
```bash
npx json-server --watch db.json --port 5000
npm run server
```

5. Install React Router DOM for navigation:

```bash
npm install react-router-dom
```

On Netlify or any static host, products will not display, because db.json is not accessible as a server.

To see the data online, you need an external API (like JSONBin, Supabase, or Firebase) or Netlify Functions.

---

## Technologies Used

React + Vite

Styled Components

JSON Server (for local development)

React Router

 ## Screenshots

 <img width="1277" height="768" alt="image" src="https://github.com/user-attachments/assets/82949ae2-a732-4ff9-b55e-731a9803b205" />

 <img width="1295" height="815" alt="image" src="https://github.com/user-attachments/assets/81dea116-18d7-499b-b5d0-6c6228e2294e" />

 <img width="1215" height="854" alt="image" src="https://github.com/user-attachments/assets/135c4421-eb55-4961-a442-3da5335bcaca" />

 <img width="1269" height="858" alt="image" src="https://github.com/user-attachments/assets/69fcc2ec-9272-4307-abee-2612c0e302b9" />


