import { React, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
    const { state, handleFunction } = useContext(GlobalContext);

    const {
        data,
        fetchStatus,
        setFetchstatus,
    } = state;

    const {
        handleDevice,
        fetchdata,
        formatRupiah,
        formatBytes,
    } = handleFunction;

    useEffect(() => {
        if (fetchStatus === true) {
            fetchdata();
        }
    }, [fetchStatus, setFetchstatus, fetchdata]);

    return (
        <section className="bg-gray-200 p-5">
            <div className="container mx-auto mt-10">
                <h1 className="text-xl font-bold ">Find your data that you need!</h1>
            </div>
            <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">

                {/* Batas awal Card section */}
                {data !== null && data.map((res, item) => {
                    return (
                        <div key={item} className="w-1/2 mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={res.image_url} alt=""
                                className="w-1/3 bg-cover bg-center bg-landscape"
                            />
                            <div className="w-2/3 p-4">
                                <h1 className="text-gray-900 font-bold text-2xl">
                                    {res.name}
                                </h1>
                                <small>{res.release_year}</small>
                                <p className="mt-2 text-gray-600 text-sm truncate">
                                    {res.description}
                                </p>
                                <div className=" item-center mt-2 text-gray-500">
                                    <span>{res.category}</span>
                                    <span>, {formatBytes(res.size)}</span>
                                    <span>
                                        , {handleDevice(res.is_android_app, res.is_ios_app)}
                                    </span>
                                </div>
                                <div className="flex item-center justify-between mt-3">
                                    <h1 className="text-gray-700 font-bold text-xl">
                                        {formatRupiah(res.price)}
                                    </h1>
                                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                        {res.rating} Ratings
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {/* Batas akhir Card section */}

            </div>
        </section>
    );
};

export default Home;