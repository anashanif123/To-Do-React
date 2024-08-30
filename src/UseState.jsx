import { useState } from "react";

function UseState() {
    const [UserName, setUserName] = useState("");
    const [users, setUsers] = useState([]);

    const addUser = () => {
        setUsers([...users, UserName]);
        setUserName("")
    }
    return (
        <>
        <br />
        <br />
        <br />
            <div className="flex flex-col items-center m-10 p-5 border rounded-lg shadow-lg bg-white max-w-md mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-4" >To DO <i className="fa-regular fa-pen-to-square" />
                </h1>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    <span className="underline text-blue-600">{UserName}</span>
                </h1>
                <div className="w-full mb-6">
                    <input
                        value={UserName}
                        placeholder="Enter your name"
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full border rounded-lg p-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={addUser}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                    >
                        <i className="fas fa-plus"></i>
                        Add
                    </button>
                    <button
                        onClick={() => setUsers([])}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300 flex items-center gap-2"
                    >
                        <i className="fas fa-trash"></i>
                        Clear
                    </button>
                </div>
                <div className="w-full">
                    {users.length > 0 ? (
                        users.map((data, ind) => (
                            <h1
                                className="text-center font-medium text-xl my-2 bg-purple-100 p-3 rounded-lg shadow-sm flex items-center justify-between"
                                key={ind}
                            >
                                <span>{data}</span>
                                <i className="fas fa-check text-green-500"></i>
                            </h1>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No tasks added yet.</p>
                    )}

                </div>


            </div>
        </>
    )

}

export default UseState;