import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './image/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
     <div className="drop-down">
     <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        Indonesia (Indonesia)
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Indonesia</Dropdown.Item>
        <Dropdown.Item href="#/action-2">English</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Arab</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     </div>


     <div className="form">
     <Form>
     <div className="logo">
      <img src={logo} alt="" />
     </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='fh' type="email" placeholder="Nomer telepon, email atau nama pengguna" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className='fh' type="password" placeholder="Kata Sandi" />
      </Form.Group>
      
      <Button className='b-login' variant="primary" type="submit">
        Masuk
      </Button>
    </Form>
     <p className='help'>Lupa detail login Anda?<strong>Dapatkan bantuan untuk login.</strong></p>
     </div>

     <h6>ATAU</h6>

     <Button className='b-login after'>
      Lanjutkan sebagai ......
     </Button>

    <footer><p>Tidak punya akun?<strong>Buat akun.</strong></p></footer>
    </div>
  );
}

export default App;
