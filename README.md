# 🎯 Admin Dashboard 📊
Your all-in-one interactive analytics dashboard built with React, TypeScript, MUI, FullCalendar, Nivo Charts, and Formik. Designed for clarity, control, and customization. Welcome to your data’s command center.

# 🚀 Features at a Glance
📆 Calendar Integration — Add, view, and delete events with FullCalendar

📊 Dynamic Charts — Bar, Line, Geography, and Pie charts powered by Nivo

📋 Real-Time Tables — Interactive DataGrid tables with search, sort, and filter

🧾 Invoices & Contacts — Mock data simulation for managing users and billing

👤 User Form — Robust validation with Formik + Yup

🌗 Dark/Light Theme Toggle — Beautiful themes with MUI + custom token system

🧱 Modular Components — Reusable and scalable codebase

⚙️ Type-Safe — Full TypeScript support for props, hooks, and state

## 🛠️ Tech Stack

Tech    Why It’s Used
React	Component-based architecture for dynamic UIs
TypeScript	Safer code, better autocomplete, and scalability
MUI	Modern UI components, built-in theming
Nivo	Stunning charts and visualizations
Formik + Yup	Form handling and validation, developer-friendly
FullCalendar	Calendar plugin for scheduling and event tracking
React Router	Page routing/navigation

🧰 Pages & Components
Page	What It Does
/dashboard	Displays summary cards, quick insights, charts, and activity log
/calendar	Add/view/remove events interactively
/contacts	Manage contact records in a searchable DataGrid
/invoices	Invoice list with amounts, filters, and selection
/form	Create a new user with full validation
/bar	View food data breakdown per country
/pie	Category distribution in a pie format
/line	Trends over time (could be revenue, users, etc.)
/geography	Regional performance plotted on a world map

🧪 How to Run the Project
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
Then go to http://localhost:5173 in your browser.

🌍 Folder Structure
bash
Copy
Edit
src/
├── components/       # Reusable UI components (Header, Sidebar, Topbar, etc.)
├── data/             # Mock data files (invoices, contacts, etc.)
├── pages/            # Route-based page components (Dashboard, Calendar, etc.)
├── theme/            # MUI theme customization with dark/light support
├── App.tsx           # Entry point
├── main.tsx          # Bootstraps the app
🔐 Access Levels (Mock Roles)
This project simulates access roles like:

admin – Full access

manager – Partial access

user – Read-only

You can customize these in the mockData.ts file under access key.

📌 What You Can Improve or Extend
✅ Backend connection (API) for real data

✅ Auth with role-based routing (admin vs user)

✅ Persistent calendar events

✅ Responsive mobile design

# 👨‍💻 Author
Built by Ruthless, a software developer focused on becoming dangerously good at React and modern frontend engineering. 💥

📜 License
This project is open source and available under the MIT License.
