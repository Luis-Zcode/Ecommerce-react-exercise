import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
const MyOrders = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <>
            <Layout>
                <div className="flex items-center w-80 justify-center relative">
                    <h1>My Orders</h1>
                </div>
                {
                    context.order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard
                                date={order.date}
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts} />
                        </Link>
                    ))
                }

            </Layout>
        </>
    )
}

export default MyOrders