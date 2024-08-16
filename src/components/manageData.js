import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Tooltip } from "flowbite-react";

const ManageData = () => {
    const { state, handleFunction } = useContext(GlobalContext);

    const {
        data,
        input,
        fetchStatus,
        setFetchstatus,
    } = state;

    const {
        handleInput,
        handleSubmit,
        handleDelete,
        handleEditData,
        fetchdata,
    } = handleFunction;

    useEffect(() => {
        if (fetchStatus === true) {
            fetchdata();
        }
    }, [fetchStatus, setFetchstatus, fetchdata]);

    return (
        <>
            {/*  List Data */}
            <div className="container mx-auto mb-10">
                <h1 className="font-bold my-10">Manage Data</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20">
                    <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400 mx-auto">
                        <thead className="text-xs text-white uppercase bg-violet-500">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    NO
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    NAMA
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    KATEGORI
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    DESCRIPTION
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    PRICE
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    RATING
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    RELEASE YEAR
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    SIZE
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    IS_ANDROID_APP
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    IS_IOS_APP
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {data !== null && data.map((res, index) => {
                                return (
                                    <>
                                        <tr key={index} className="bg-white border-b">
                                            <th
                                                scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                {index + 1}
                                            </th>
                                            <td className="py-4 px-6">{res.name}</td>
                                            <td className="py-4 px-6">{res.category}</td>
                                            <td className="py-4 px-6">
                                                <p className="truncate w-40">{res.description}</p>
                                            </td>
                                            <td className="py-4 px-6">{res.price}</td>
                                            <td className="py-4 px-6">{res.rating}</td>
                                            <td className="py-4 px-6">{res.release_year}</td>
                                            <td className="py-4 px-6">{res.size}</td>
                                            <td className="py-4 px-6">{res.is_android_app}</td>
                                            <td className="py-4 px-6">{res.is_ios_app}</td>
                                            <td className="py-4 px-6">
                                                <button
                                                    onClick={handleEditData}
                                                    value={res.id}
                                                    type="button"
                                                    className="mx-0.5 w-min py-2 px-3 font-medium text-center text-xs text-black border border-gray-400 bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={handleDelete}
                                                    value={res.id}
                                                    type="button"
                                                    className="mx-0.5 w-min py-2 px-3 font-medium text-center text-xs text-white bg-red-600 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>


                {/* Create Data */}
                <form onSubmit={handleSubmit}>
                    {/* <form> */}
                    <h1 className="font-bold my-10">Create Data</h1>
                    
                    <p className="border-b-2 pb-1 text-sm my-10">Gambar Data Game</p>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Image URL :{" "}
                        </label>
                        <input
                            onChange={handleInput}
                            value={input.image_url}
                            name="image_url"
                            type="text"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <p className="border-b-2 pb-1 text-sm my-10">Data Game</p>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Nama{" "}
                        </label>
                        <input
                            onChange={handleInput}
                            value={input.name}
                            name="name"
                            type="text"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Category{" "}
                        </label>
                        <input
                            onChange={handleInput}
                            value={input.category}
                            name="category"
                            type="text"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Description :{" "}
                        </label>
                        <textarea
                            rows="1"
                            onChange={handleInput}
                            value={input.description}
                            name="description"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Price{" "}
                        </label>
                        <input
                            onChange={handleInput}
                            value={input.price}
                            name="price"
                            type="number"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Rating{" "}
                        </label>
                        <input
                            min="0"
                            max="5"
                            onChange={handleInput}
                            value={input.rating}
                            name="rating"
                            type="number"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Release Year{" "}
                        </label>
                        <input
                            min="2009"
                            max="2024"
                            onChange={handleInput}
                            value={input.release_year}
                            name="release_year"
                            type="number"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Size{" "}
                        </label>
                        <input
                            onChange={handleInput}
                            value={input.size}
                            name="size"
                            type="number"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <p className="border-b-2 pb-1 text-sm my-10">Jenis Perangkat</p>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            <Tooltip className="inline" content="0 = false, 1 = true">
                                Android ?
                            </Tooltip>
                        </label>

                        <input
                            min="0"
                            max="1"
                            onChange={handleInput}
                            value={input.is_android_app}
                            name="is_android_app"
                            type="number"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            <Tooltip className="inline" content="0 = false, 1 = true">
                                iOS ?
                            </Tooltip>
                        </label>
                        <input
                            min="0"
                            max="1"
                            onChange={handleInput}
                            value={input.is_ios_app}
                            name="is_ios_app"
                            type="number"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default ManageData;