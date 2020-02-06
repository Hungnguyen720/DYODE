import React from "react"; 

class Categories extends React.Component {
    render(){
        return(
            <div>
                <div className="product-category-container">
                    <div className="product-category p-c-1 bg-yellow">
                    </div>
                    <div className="product-category p-c-1 bg-blue">
                    </div>
                </div>
                    <div className="product-category p-c-3 bg-green">
                    </div>
            </div>
        )
    }
}

export default Categories