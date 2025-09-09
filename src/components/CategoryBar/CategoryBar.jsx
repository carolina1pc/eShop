import { Link } from "react-router-dom";
import './CategoryBar.css';

export default function CategoryBar() {
    return (
         <div className="categories-bar">
            <ul>
            <li><Link to="/category/gaming+accesorii">Gaming & Accesorii</Link></li>
            <li><Link to="/category/laptop+tablete+telefoane">Laptop, Tablete & Telefoane</Link></li>
            <li><Link to="/category/pc+periferice">PC & Periferice</Link></li>
            </ul>
          </div>
    )
}