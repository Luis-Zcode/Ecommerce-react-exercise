import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"


const OrdersCard = ({ totalPrice, totalProducts, date }) => {

    return (


        <div className="w-full mt-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-black">Date: {date}</h5>
            <div className="flex items-baseline text-gray-900">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-4xl font-extrabold tracking-tight">{totalPrice}</span>
                <span className="ms-1 text-xl font-normal text-black">/Total Price</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6"/>
                    <span className="text-base font-semibold leading-tight text-black  ms-3">Total product: {totalProducts}</span>
                </li>
                
            </ul>
            <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"><ChevronRightIcon className="h-5"/></span>
        </div>

    )
}

export default OrdersCard