import "../styles/card.css";

export const CardProduct = ({ prod, orderProduct, getQuantity, setOrderProduct, quantity}) => {


  const handleAdd = (prop) => {
    console.log(orderProduct)
    if (orderProduct.find((elem) => elem.id === prop.id)) {
      setOrderProduct = orderProduct.map((elem) => {
        let item;
        if (elem.id === prop.id) {
          const qty = elem.qty++;
          item = { ...elem, qty };
        } else {
          item = elem;
        }
        getQuantity(prop, "+");
        return item;
      });
    } else {
      setOrderProduct([...orderProduct, { ...prop, qty: 1 }]);
      getQuantity(prop , "+");
    }
    localStorage.setItem('order', JSON.stringify(orderProduct))
  };



  const handleRest = (prop) => {
    console.log(orderProduct)
    const productIndex = orderProduct.findIndex((elem) => elem.id === prop.id);

    if (productIndex > -1) {
      const productToHandle = orderProduct[productIndex];
      if (productToHandle.qty > 1) {
        productToHandle.qty--;
        orderProduct[productIndex] = productToHandle;

      } else if (productToHandle.qty === 1) {
        const index = orderProduct.findIndex((elem) => elem.id === prop.id);
        orderProduct.splice(index, 1);
      }
      setOrderProduct(orderProduct);
      getQuantity(productToHandle, "");
    }
    localStorage.setItem('order', JSON.stringify(orderProduct))
  };
  const handleDelete = (prop) =>{
    const index = orderProduct.findIndex((elem) => elem.id === prop.id);
        orderProduct.splice(index, 1);
        setOrderProduct(orderProduct);
      getQuantity(0, "");
    localStorage.setItem('order', JSON.stringify(orderProduct))
  }

  return (
    <>
      <section className="card-container">
        <article className="card-section">
          <img className="card-img" src={prod.img} alt="img"></img>
          { orderProduct.find((elem)=> elem.id === prod.id)?
            ( <div className="card-section-sum">
            <button className="button-rad" onClick={() => handleAdd(prod)}>
              +
            </button>
            <p>{quantity}</p>
            <button className="button-rad" onClick={() => handleRest(prod)}>
              -
            </button>
          </div> ) : ''}
        </article>
        <article className="card-sectionL">
          <section className="section-left">
            <h2 className="title">{prod.title}</h2>
            { orderProduct.find((elem)=> elem.id === prod.id)?
            ( <img className="check" src="../assets/image/check.svg" alt="check"></img>) : ''}
          </section>
          <section className="card-section-info">
          <p className="subtitle">{prod.product}</p>
          <p className="subtitle">Cantidad: {prod.quantity}</p>
          <p className="subtitle">Precio: s/.{prod.price} </p>
          <p className="subtitle">Precio Sugerido: s/.{prod.price + 10}</p>
          <div>
            { orderProduct.find((elem)=> elem.id === prod.id)?
            (<button className="button-white" onClick={() => handleDelete(prod)}>Quitar</button> ) :(<button className="button-red" onClick={() => handleAdd(prod)}>
            Agregar
            </button>)}
          </div>
          </section>

        </article>
      </section>
    </>
  );
};
