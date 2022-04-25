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
    <h1 className = 'hello'>Have a good day!</h1>
    <p className='block'><Message /> </p> 
    <div> 
    <Products products={products }/>
    </div>
    </div>
    )

}
export default App