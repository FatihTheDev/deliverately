import "./OrderForm.css"
import { useState } from "react"

export default function OrderForm(){

    const [quantity, setQuantity] = useState<number>(0);
    const [name, setName] = useState<string>("danny");
    const [user, setUser] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pass1, setPass1] = useState<string>("");
    const [pass2, setPass2] = useState<string>("");


    return(
        <form style={{marginLeft: '2em'}} action="submit.php" method="POST">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Enter your personal information for the order:</h2><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-12">
                        <div className="forms">
                            <label style={{display: 'block', marginBottom: '1em'}} htmlFor="name">Enter your full name:</label> 
                            <input onChange={(e) => setName(e.target.value)} style={{display: 'block', marginBottom: '1em'}} type="text" minLength={2} id="name" name="name" />

                            <label style={{display: 'block', marginBottom: '1em'}} htmlFor="user">Enter your username:</label> 
                            <input onChange={(e) => setUser(e.target.value)} style={{display: 'block', marginBottom: '1em'}} type="text" minLength={5} id="user" name="user" />

                            <label style={{display: 'block', marginBottom: '1em'}} htmlFor="email">Enter your email:</label> 
                            <input onChange={(e) => setEmail(e.target.value)} style={{display: 'block', marginBottom: '1em'}} type="email" id="email" name="email" />

                            <select style={{display: 'block', marginBottom: '1em'}}  className="form-select-md bg-light" aria-label="Default select example" id="food" name="food">
                            <option selected>What food to order?</option>
                            <option value="1">Pizza</option>
                            <option value="3">Pasta</option>
                            <option value="4">Fries</option>
                            <option value="5">Salad</option>
                            <option value="6">Calamari</option>
                            <option value="7">Rice</option>
                            </select>   

                            <label style={{display: 'block', marginBottom: '1em'}} htmlFor="quantity">Quantity:</label>
                            <div style={{display: 'block', marginBottom: '1em'}} className="buttons">
                                <button type="button" onClick={() => setQuantity(quantity -1)}>-</button> {quantity} <button type="button" onClick={() => setQuantity(quantity +1)}>+</button>
                            </div>

                            <label style={{display: 'block'}} htmlFor="pass">Enter your order password (when the food is delivered, we will ask for the password):</label> 
                            <input type="text" minLength={2} id="pass" name="pass" onChange={e => setPass1(e.target.value)} />

                            <label style={{display: 'block'}} htmlFor="pass">Confirm your password:</label> 
                            <input style={{display: 'block', marginBottom: '1em'}} type="text" minLength={2} id="pass" name="pass" onChange={e => setPass2(e.target.value)} />

                            {(pass1 != "") && (pass2 != "") ? (pass1 === pass2) ? <p style={{color: 'green'}}>Passwords match!</p> : <p style={{color: 'red'}}>Passwords don't match!</p> : <p></p>}

                            <button type="submit">Submit</button>
                            </div>  
                    </div>
                </div>
            </div>
        </form>
    )   
}
