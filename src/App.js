import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ShoesList from './ShoesList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail';
import { useState } from 'react';
import data from './data';

function App() {
    const [shoes] = useState(data);

    const navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoPrismo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/detail');
                            }}
                        >
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg"></div>
                            <div className="container">
                                <div className="row">
                                    <ShoesList shoes={shoes} />
                                </div>
                            </div>
                        </>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="*" element={<div>없는 페이지입니다.</div>} />
            </Routes>
        </div>
    );
}

export default App;
