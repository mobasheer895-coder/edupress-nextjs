interface btnData {
    btnContent : string
}
const BtnSecondary = ({btnContent} : btnData) => {
    return (
        <button 
            className="border border-orange-400 py-3 px-4 rounded-4xl text-orange-400 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl/40 hover:shadow-amber-500 ">
            {btnContent}
        </button>
    )
}

export default BtnSecondary