import CategoriesCard from "../card/CategoriesCard"
import HeadSection from "../headSection/headSection"

const Catagories = () => {
    return (
        <div className="p-10 flex flex-col gap-10 max-sm:p-2.5">
            <HeadSection
                title="Top Categories"
                subTitle="Explore our Popular Categories"
                btnContent="All categories"
            />
            <CategoriesCard/>
        </div>
    )
}

export default Catagories
