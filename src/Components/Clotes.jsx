/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { MessageCircle, Heart, Info, X } from "lucide-react";

export default function Clotes({ product, onAddToCart }) {
    const [likedProducts, setLikedProducts] = useState({});
    const [showInfoPopup, setShowInfoPopup] = useState(null);
    const [showLikePopup, setShowLikePopup] = useState(null);
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [comment, setComment] = useState("");
    const [submittedComment, setSubmittedComment] = useState(null);
    const [showAddToCartPopup, setShowAddToCartPopup] = useState(null); // State for add to cart popup

    const toggleLike = (item) => {
        setLikedProducts((prev) => {
            const isLiked = prev[item.id];
            if (isLiked) {
                setShowLikePopup(`Kamu batal menyukai ${item.name}`);
                return { ...prev, [item.id]: false };
            } else {
                setShowLikePopup(`Kamu menyukai ${item.name}`);
                return { ...prev, [item.id]: true };
            }
        });
    };

    const handleInfoClick = (item) => {
        setShowInfoPopup(item);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setSubmittedComment(comment);
        setShowCommentPopup(false);
        setComment("");
    };

    const handleAddToCart = (item) => {
        onAddToCart(item);
        setShowAddToCartPopup(`Produk ${item.name} berhasil ditambahkan ke keranjang!`);
        setTimeout(() => setShowAddToCartPopup(null), 3000); // Hide popup after 3 seconds
    };

    return (
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {product.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <p className="text-gray-900 font-semibold">Price: Rp {item.price}</p>

                            <div className="flex justify-center items-center space-x-4 mt-2 text-gray-500">
                                <Info
                                    onClick={() => handleInfoClick(item)}
                                    className="cursor-pointer hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
                                />
                                <Heart
                                    onClick={() => toggleLike(item)}
                                    className={`cursor-pointer transition-colors duration-200 transform hover:scale-110 ${likedProducts[item.id] ? "text-red-500" : ""
                                        }`}
                                />
                                <MessageCircle
                                    onClick={() => setShowCommentPopup(true)}
                                    className="cursor-pointer hover:text-green-500 transition-colors duration-200 transform hover:scale-110"
                                />
                            </div>

                            <button
                                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                                onClick={() => handleAddToCart(item)} // Call handleAddToCart
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Info Product */}
            {showInfoPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                        <button
                            onClick={() => setShowInfoPopup(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{showInfoPopup.name}</h2>
                        <p className="text-lg font-semibold">Price: Rp {showInfoPopup.price}</p>
                        <p className="text-lg font-semibold">Color: {showInfoPopup.color}</p>
                        <p>{showInfoPopup.description}</p>
                        <div className="mt-4">
                            <img
                                src={showInfoPopup.image}
                                alt={showInfoPopup.name}
                                className="w-full h-auto object-contain rounded-lg"
                            />
                        </div>
                        <button
                            onClick={() => setShowInfoPopup(null)}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Popup Like/Unlike */}
            {showLikePopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>{showLikePopup}</p>
                        <button
                            onClick={() => setShowLikePopup(null)}
                            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {/* Popup Comment Input */}
            {showCommentPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative">
                        <button
                            onClick={() => setShowCommentPopup(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-xl font-bold mb-4">Tulis Komentar</h2>
                        <form onSubmit={handleCommentSubmit}>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full h-32 p-2 border rounded-lg"
                                placeholder="Tulis komentar kamu di sini..."
                            />
                            <button
                                type="submit"
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Popup After Submitting Comment */}
            {submittedComment && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg relative animate-shake"
                        style={{
                            animation: "shake 0.5s ease-in-out infinite alternate",
                            maxWidth: "400px",
                        }}
                    >
                        <p className="text-lg font-bold text-center">Komentar kamu:</p>
                        <p className="text-gray-800 text-center text-xl mt-2">
                            {submittedComment}
                        </p>
                        <button
                            onClick={() => setSubmittedComment(null)}
                            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {/* Popup After Adding to Cart */}
            {showAddToCartPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg relative animate-fade-in"
                        style={{
                            animation: "fadeIn 0.5s ease-in-out",
                            maxWidth: "400px",
                        }}
                    >
                        <p className="text-lg font-bold text-center">{showAddToCartPopup}</p>
                        <button
                            onClick={() => setShowAddToCartPopup(null)}
                            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes shake {
                    0% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(10px);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
