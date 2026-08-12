interface btnData {
    btnContent : string
    onClick?: () => void
    className ?: string
}
const BtnPrimary = ({btnContent , onClick , className} : btnData) => {
    return (
            <button 
                onClick={onClick}
                className={`bg-orange-500/80 py-3 px-4 rounded-4xl text-white cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl/40 hover:shadow-amber-500 ${className}`}>
                {btnContent}
            </button>
    )
}

export default BtnPrimary