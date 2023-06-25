import ProductContainer from "./components/ProductContainer";
import { ProductProvider } from "./contexts/ProductContext";
import "./index.css";

function App() {
  return (
    <div>
      <ProductProvider>
        <ProductContainer />
      </ProductProvider>
    </div>
  );
}

export default App;
