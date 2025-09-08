import { useCart } from '../../providers/CartProvider';
import {
    AppHeader,
    AppFooter
} from '../partials';


function Layout({ children }) {

  const {cartLength} = useCart();

  return (
    <div  className="flex flex-col min-h-screen">
      
        <AppHeader cartLength={cartLength}/>
        <main  className="flex-grow p-6">{children}</main>
        <AppFooter/>
    </div>
  );
}

export default Layout;

