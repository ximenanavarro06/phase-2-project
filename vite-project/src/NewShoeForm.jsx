import React, {useState} from "react";

function NewShoeForm() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        price: "",
        retailPrice: "", 
        releaseYear: "",
        colorway: "",
    })

function handleSubmit(event) {
    event.prevent.default();

    const newShoe = {
        name: formData.name,
        image: formData.image,
        price: formData.price,
        retailPrice: formData.retailPrice, 
        releaseYear: formData.releaseYear,
        colorway: formData.colorway,
    };

    fetch('http://localhost:4000/yourSales', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
        body: JSON.stringify(newShoe),
    })
      .then ((r) => r.json())
      .then ((newShoe) => onAddShoe(newShoe))
}

function handleChange(event) {
    console.log(event.target.value);
    setFormData({...formData, [event.target.name]: event.target.value})
}

    return (
        <div className="new-shoe-form">
            <h2>Post Your Own Pair Of Air Jordan's to Sell</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Shoe name" onChange={handleChange} value={formData.name} />
                <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
                <input type="text" name="price" placeholder="Sale Price" onChange={handleChange} value={formData.price} />
                <input type="text" name="retailPrice" placeholder="Retail Price" onChange={handleChange} value={formData.retailPrice} />
                <input type="text" name="releaseYear" placeholder="Release Year" onChange={handleChange} value={formData.releaseYear} />
                <input type="text" name="colorway" placeholder="Colorway" onChange={handleChange} value={formData.colorway} />
                <button type="submit">Post Shoe</button>
            </form>
        </div>

    );
}

export default NewShoeForm;