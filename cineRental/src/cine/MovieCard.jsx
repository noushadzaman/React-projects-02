import { useContext, useState } from "react";
import tag from "../assets/tag.svg"
import { getImgUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const { state, dispatch } = useContext(MovieContext);

    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    }

    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    }

    const handleAddToCart = (event, movie) => {
        event.stopPropagation();
        const found = state.cartData.find((item) => {
            return item.id === movie.id;
        })
        if (!found) {
            dispatch({
                type: "ADD_TO_CART",
                payLoad: {
                    ...movie
                }
            })
            toast.success(`${movie.title} added successfully`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else {
            toast.error(`${movie.title} is already in cart`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        
    }

    return (
        <>
            <figure
                className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
                <a onClick={() => handleMovieSelection(movie)}>

                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <button
                            onClick={(e) => handleAddToCart(e, movie)}
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#">
                            <img src={tag} alt="" />
                            <span>${movie.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
            </figure>
            {
                showModal && <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} onCartAdd={handleAddToCart} />
            }
            
        </>
    );
};

export default MovieCard;