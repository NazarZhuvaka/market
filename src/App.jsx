import authImg from './assets/main-img.png';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';

function App() {
  return (
      <div>
        <section className="auth">
          <div className="container">
            <div className="auth-info">
              <Header />
              <Form />
              <Footer />
            </div>

            <div className="auth-img">
              <img src={authImg} alt="main-img" />
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
