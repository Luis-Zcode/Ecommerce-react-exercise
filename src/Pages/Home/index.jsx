import { useContext, useEffect, useState } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"

const Home = () => {
    const context = useContext(ShoppingCartContext)
    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Card key={item.id} product={item} />
                ))
            )
        }else {
            return (
                <div>We don't have anything :(</div>
            )
        }
    }

    return (
        <>
            <Layout>
                <div className="flex items-center w-80 justify-center relative mb-4">
                    <h1 className="font-medium text-xl">Exclusive Products</h1>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="relative">
                        <input type="text"
                            className="bg-white border mb-6 h-12 pl-4 pr-8 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out w-24 focus:w-64"
                            placeholder='Search a product'
                            onChange={(event) => context.setSearchByTitle(event.target.value)}
                        />
                        <span className="absolute right-0.5 top-1 mt-1 ">
                            <MagnifyingGlassCircleIcon className="h-8 w-8 fill-current" />
                        </span>
                    </div>
                </div>

                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {renderView()}
                </div>
                <ProductDetail />
            </Layout>


        </>
    )
}

export default Home