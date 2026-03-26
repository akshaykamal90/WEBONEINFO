# iMentor - Alumni Management System

A comprehensive SaaS web application for managing alumni networks for schools and colleges.

## 🚀 Features

### Core Features
- **Alumni Management**: Complete database with advanced search and filtering
- **Event Management**: Create, manage, and track alumni events
- **Job Board**: Connect students with career opportunities
- **Mentorship Programs**: Facilitate alumni-student mentorship
- **Analytics Dashboard**: Real-time insights and reporting
- **Role-based Access**: Different experiences for Admin, Alumni, and Students

### Technical Features
- **Modern UI**: Built with React + Vite + Tailwind CSS
- **Responsive Design**: Works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Toast Notifications**: User-friendly feedback system
- **Authentication**: Secure login with role-based access
- **Interactive Demo**: Explore features without registration

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **Icons**: Lucide React
- **Charts**: Recharts (for future analytics)

## 📁 Project Structure

```
src/
 ├── components/          # Reusable UI components
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── Hero.jsx
 │    ├── FeatureCard.jsx
 │    ├── CTA.jsx
 │    ├── Sidebar.jsx
 │    └── StatCard.jsx
 ├── context/            # React Context providers
 │    ├── AuthContext.jsx
 │    ├── ThemeContext.jsx
 │    └── ToastContext.jsx
 ├── layouts/            # Layout components
 │    ├── MainLayout.jsx
 │    └── DashboardLayout.jsx
 ├── pages/              # Page components
 │    ├── Home.jsx
 │    ├── Features.jsx
 │    ├── Pricing.jsx
 │    ├── Demo.jsx
 │    ├── Login.jsx
 │    ├── Register.jsx
 │    └── Dashboard.jsx
 ├── App.jsx            # Main App component with routing
 ├── main.jsx           # App entry point
 └── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd imentor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔐 Demo Accounts

The application includes demo accounts for testing:

### Admin Account
- **Email**: admin@imentor.com
- **Password**: admin123
- **Access**: Full admin dashboard with all features

### Alumni Account
- **Email**: alumni@imentor.com
- **Password**: alumni123
- **Access**: Alumni-specific features and networking

### Student Account
- **Email**: student@imentor.com
- **Password**: student123
- **Access**: Student features for mentorship and opportunities

## 📱 Pages & Features

### Landing Page (`/`)
- Hero section with compelling value proposition
- Problem-Solution framework
- Features showcase
- Benefits for different user types
- How it works section
- Call-to-action sections

### Features Page (`/features`)
- Detailed feature descriptions
- Core capabilities
- Advanced features
- Integration options

### Pricing Page (`/pricing`)
- Tiered pricing plans
- Feature comparison
- FAQ section
- Billing toggle (monthly/yearly)

### Demo Page (`/demo`)
- Interactive platform preview
- Feature demonstrations
- Testimonials
- No login required

### Authentication
- **Login** (`/login`): Secure authentication with demo accounts
- **Register** (`/register`): New user registration with role selection

### Dashboard (`/dashboard`)
- **Admin View**: Complete management interface
- **Alumni View**: Networking and mentorship features
- **Student View**: Career and learning opportunities

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) with full shade range
- **Secondary**: Gray scale for text and backgrounds
- **Success**: Green for positive actions
- **Error**: Red for warnings and errors
- **Warning**: Yellow for cautions

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean, accessible input fields
- **Navigation**: Responsive with mobile menu

## 🔧 Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation if needed

### Theme Customization
- Modify colors in `tailwind.config.js`
- Update CSS variables in `src/index.css`

### Adding New Roles
1. Update role logic in `src/context/AuthContext.jsx`
2. Modify sidebar in `src/components/Sidebar.jsx`
3. Update dashboard content in `src/pages/Dashboard.jsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Environment Variables
Create a `.env` file for production:
```
VITE_API_URL=https://your-api.com
VITE_APP_TITLE=iMentor
```

## 🔄 Future Enhancements

### Backend Integration
- RESTful API endpoints
- Database integration (PostgreSQL/MongoDB)
- Authentication with JWT
- File upload for alumni profiles

### Advanced Features
- Real-time notifications
- Video conferencing integration
- Advanced analytics
- Mobile applications
- Multi-language support

### Performance
- Code splitting
- Lazy loading
- Image optimization
- Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@imentor.edu
- Documentation: [Link to docs]
- Issues: [Link to GitHub issues]

---

**Built with ❤️ for educational institutions worldwide**
