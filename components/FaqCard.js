export default function FaqCard({ faq }) {
    const { question, answer } = faq
    return (
        <div className="bg-white rounded-lg p-6 shadow-md mb-4">
            <h3 className="text-xl font-bold mb-2">{question}</h3>
            <p className="text-gray-600">{answer}</p>
        </div>
    )
}
