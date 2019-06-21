import Footer from './Footer';
import Header from './Header';
import Character from './Character';


const Index = () => (
    <div>
        <Header/>
        <div className="content">
        <Character />
        <style jsx>{`
            .content {
                margin-bottom: 50px;
            }
            `}</style>
        </div>
        <Footer />
    </div>
);

export default Index;