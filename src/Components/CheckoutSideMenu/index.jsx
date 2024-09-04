import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { TotalPrice } from '../../utils'
import OrderCard from '../../Components/OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
    const { cartProducts, setCartProducts, isCheckoutSideMenuOpen,
        closeCheckoutSideMenu, order, setOrder, setCount, count, setSearchByTitle
    } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCount(count - 1)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.43',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: TotalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setCount(0)
        setSearchByTitle(null)
        closeCheckoutSideMenu()
    }

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${TotalPrice(cartProducts)}</span>
                </p>

                <Link to='/my-orders/last'>
                    <button
                        className='w-full bg-black text-white py-3 rounded-lg'
                        onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu