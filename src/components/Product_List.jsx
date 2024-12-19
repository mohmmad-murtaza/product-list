import React from "react";
const Product_List = ({ products }) => {
    return (
        <>
            <div className="table_Box">
                <h2>Product List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>products ID</th>
                            <th>Product Name</th>
                            <th>Ctegory</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.Product_ID}</td>
                                <td>{product.Product_Name}</td>
                                <td>{product.Ctegory}</td>
                                <td>${product.Price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Product_List;