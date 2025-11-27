import { Footer } from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">{/* Main content goes here */}</main>
            <Footer />
        </div>
    );
}

export default Home;
