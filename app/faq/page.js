
import faqList from "@/data/faq-list"
import FaqCard from "@/components/FaqCard"
import Navbar from "@/components/Navbar"

export default function FAQ() {
    const faqCards = faqList.map((faq) => {
        return <FaqCard key={faq.id} faq={faq} />
    })

    return (
        <>
            <Navbar />
            <section className="bg-neutral-200 py-10">
                <div className="container mx-auto">
                    {faqCards}
                </div>

            </section>
        </>
    )
}
