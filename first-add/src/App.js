import Message from './start/Message.js';
import Products from './start/ProductsList';
import ProductItem from './start/productItem';
     
import './App.css';

function App() {

    const  products = [
        { id: 1, title: 'лимон' },
        { id: 2, title: 'сметана' },
        { id: 3, title: 'курица' },
        { id: 4, title: 'петрушка' }
    ];

    return (  <div className = 'first-app' > 
        <div className='contain'>
            <h1 className = 'heder'>Список покупок</h1>    
            <div > <Products products={products }/></div>
            <p className ='goodDay'><Message /> </p> 
        </div>
    </div>
    )

}
export default App