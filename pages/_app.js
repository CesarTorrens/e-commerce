import "../styles/globals.css";
import MyContext from "../context/MyContext";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import axios from "axios";
import React from "react";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  headers: {
    "Content-Type": "aplication/json;charset=utf-8",
  },
});

function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [categoryProducts, setCategoryProducts] = React.useState([]);
  const [openCart, setOpenCart] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [pagination, setPagination] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [oldId, setOldId] = React.useState(null);
  const [product, setProduct] = React.useState({})
  
  const router = useRouter();
  const id = router.query.categoryId;
  const productId = router.query.productId;
  const idCategoryProduct = product?.category?.id
  const callUser = React.useCallback(async () => {
    const { data } = await api(`users`);
    try {
      const numId = Math.floor(Math.random() * data.length);
      const userFiltered = data.filter((user) => user.id === numId);
      setUser(userFiltered);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const callProducts = React.useCallback(async () => {
    const { data } = await api(`products?offset=${pagination}&limit=20`);
   
    const products = data.map(product => {
       const items = {
        category: product.category,
        description: product.description,
        id: product.id,
        images: product.images,
        price: product.price,
        title: product.title,
        cant: Math.floor(Math.random() * 100),
      }
      return items
    } )
    
    try {
      setProducts((state) => [...state, ...products]);
    } catch (error) {
      console.log(error);
    }
  }, [pagination]);
  const callCategories = React.useCallback(async () => {
    const { data } = await api(`categories`);
    try {
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const callCategoryProducts = React.useCallback(async () => {
    const { data } = await api(`categories/${id}/products?offset=${pagination}&limit=20`);
    try {
      if (id !== oldId ) {
        setCategoryProducts(data)
        setPagination(0)
        setOldId(id)
      } else {
        setCategoryProducts((state) => [...state, ...data]);
        setOldId(id)
      }
    } catch (error) {
      console.log(error);
    }
  }, [id, pagination, oldId]);
  const callCategoryInProduct = React.useCallback(async () => {
    const { data } = await api(`categories/${idCategoryProduct}/products?offset=0&limit=10`);
    try {      
      setCategoryProducts(data)      
    } catch (error) {
      console.log(error);
    }
  }, [idCategoryProduct]);

  const callProduct = React.useCallback(async () => {
    const { data } = await api(`products/${productId}`);
    try {
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }, [productId])

  const showCart = () => setOpenCart(!openCart);

  
  const addToCart = (product) => {
    const cartIds = cart.map(product => product.id).includes(product.id)
    if(cartIds) {
      return
    }
    setCart([...cart, product]);
  };

  const removeProduct = (idProduct) => setCart(cart.filter(product => product.id !== idProduct))

  const totalPayment = cart
    .map((product) => product.price * product.quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  // REVISAR XQ SE LLAMAN DOS VECES LAS FUNCIONES
  // Las FUNCIONES SE Declaran en el context y luego se llaman en los componentes donde se necesiten
  // Si la funcion va a ser llamada dentro de un Hook, esta funcion debe ser un useCallback
  return (
    <MyContext.Provider
      value={{
        callUser,
        user,
        products,
        setProducts,
        setPagination,
        pagination,
        loading,
        setLoading,
        api,
        category,
        callProducts,
        callCategories,
        callCategoryProducts,
        categoryProducts,
        showCart,
        openCart,
        addToCart,
        cart,
        totalPayment,
        removeProduct,
        callProduct,
        product,
        callCategoryInProduct
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContext.Provider>
  );
}

export default MyApp;
