
const Square = ({ value, handleSquareClick }) => {

    return (
        <button
            onClick={handleSquareClick}
            className={`bg-[#5f666e] h-[80px] w-[80px] m-1 leading-9 text-3xl shadow-2xl rounded-sm ${value === "X" ? 'text-cyan-400' : 'text-rose-400'}`}
        >{value}</button>
    );
};

export default Square;