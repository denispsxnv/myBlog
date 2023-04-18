import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import PostPage from './pages/PostPage/PostPage';
import Footer from './componets/Footer/Footer';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/posts' element={<PostPage/>}/>
          <Route path='/post/:id' element={<SinglePostPage/>} />
          <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
