
import './App.css';
import Header from './My component/Header';
import { Container} from 'react-bootstrap';
import Mainpage from './My component/Mainpage';
import Footer from './My component/Footer';
import Aboutus from './My component/Aboutus';
import ReviewsPage from './My component/ReviewsPage';
import Blog from './My component/Blog';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
function App() {
  const Reviewdata = [
    {
        Title: 'Top Travel Companion App',
        Review: 'Planning a vacation? These days, your entire holiday can be booked from the palm of your hand. Among the sea of travel apps, this one stands out for convenience and speed.',
        name: 'Arushi',
        Year: 2025
    },
    {
        Title: 'Seamless Holiday Booking Experience',
        Review: 'This app is a game-changer. I found great deals and booked my whole trip in just a few minutes!',
        name: 'Rohan',
        Year: 2025
    },
    {
        Title: 'Stress-Free Vacation Planning',
        Review: 'Easy interface and quick bookings—perfect for spontaneous travelers like me.',
        name: 'Sneha',
        Year: 2025
    },
    {
        Title: 'All-in-One Travel Hub',
        Review: 'Reliable and full of options. Made planning my family vacation smooth and stress-free.',
        name: 'Jay',
        Year: 2025
    },
    {
        Title: 'Smart App for Savvy Travelers',
        Review: 'I love how I can compare hotels and flights all in one place. Saves me so much time.',
        name: 'Megha',
        Year: 2025
    },
    {
        Title: 'Budget-Friendly Booking Tool',
        Review: 'The discounts and exclusive deals were amazing. Definitely the go-to app for travel bookings.',
        name: 'Taran',
        Year: 2025
    },
    {
        Title: 'Quick & Reliable Holiday Planner',
        Review: 'Well-organized, user-friendly, and super fast. My go-to app every time I plan a holiday.',
        name: 'Priya',
        Year: 2025
    }
];
  return (
    <div className="App">
      <Router>
            <Header/>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/reviews' element={<ReviewsPage review={Reviewdata}/>}/>
          <Route path='/blogs' element={<Blog/>}/>
        </Routes>
            <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
