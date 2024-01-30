import { IoMdArrowDropup } from "react-icons/io";

const History = ({ history, handleGoToHistory }) => {
    let description;
    const moves = history?.map((squares, move) => {
        if (move > 0) {
            description = `Go to the move # ${move}`
        }
        else {
            description = `Initial stage`
        }
    })

    return (
        <div>
            {
                history?.map((squares, index) => <li
                    onClick={() => handleGoToHistory(index)}
                    className="border-gray-600 rounded border flex mb-2 p-2 items-center gap-1 list-none text-xl"
                    key={index}
                ><button>{`Go to move ${index} `}</button><IoMdArrowDropup className="text-teal-400 " />
                </li>)
            }
        </div>
    );
};

export default History;