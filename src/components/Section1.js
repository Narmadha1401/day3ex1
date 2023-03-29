import {adder} from './Cart.js';

function Section1() {
    return(
        <div className="secdisplay">
            <ul>
                <h4>TEA</h4>
                <li>
                    BLACK TEA 
                    <button id="addb1" value={50} onClick={adder("addb1","Black Tea")}>Add</button>
                </li>
                <li>
                    GREEN TEA 
                    <button id="addb2" value={40} onClick={adder("addb2","Green Tea")}>Add</button> 
                </li>
                <li>
                    LEMON TEA
                    <button id="addb3" value={70} onClick={adder("addb3","Lemon Tea")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>COFFEE</h4>
                <li>
                    HOT COFFEE
                    <button id="addb4" value={60} onClick={adder("addb4","Hot Coffee")}>Add</button> 
                </li>
                <li>
                    COLD COFFEE
                    <button id="addb5" value={70} onClick={adder("addb5","Cold Coffee")}>Add</button> 
                </li>
                <li>
                    CAPUCINNO
                    <button id="addb6" value={80} onClick={adder("addb6","Capucinno")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>MILKSHAKE</h4>
                <li>
                    OREO MILKSHAKE
                    <button id="addb7" value={100} onClick={adder("addb7","Oreo Milkshake")}>Add</button> 
                </li>
                <li>
                    KITKAT MILKSHAKE
                    <button id="addb8" value={80} onClick={adder("addb8","Kitkat Milkshake")}>Add</button> 
                </li>
                <li>
                    CHOCOLATE MILKSHAKE
                    <button id="addb9" value={60} onClick={adder("addb9","Chocolate Milkshake")}>Add</button> 
                </li>
            </ul>
        </div>
    )
}


export default Section1;