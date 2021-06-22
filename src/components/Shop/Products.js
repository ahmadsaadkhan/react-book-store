import ProductItem from './ProductItem';
import classes from './Products.module.css';
const dummyProducts = [{
  id: 'p1',
  price: 6.34,
  title: 'My First Book',
  description: 'The First Book i ever wrote'
},
{
  id: 'p2',
  price: 12.27,
  title: 'My Second Book',
  description: 'The Second Book i ever wrote'
}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { dummyProducts.map((product) => (
        <ProductItem
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          />
          ))}
      </ul>
    </section>
  );
};

export default Products;
