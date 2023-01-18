import Layout from "./Components/Layout";
import { Route, Routes } from "react-router-dom";
import MainPaga from './pages/MainPage';
import PostsPage from './pages/PostsPage';
import AdminPage from "./pages/AdminPage";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<MainPaga/>} />
            <Route path="/posts" element={<PostsPage/>} />
            <Route path="/admin" element={<AdminPage/>} />
        </Routes>
        <ToastContainer  position='top-right' />
    </Layout>
  )
}

export default App;
