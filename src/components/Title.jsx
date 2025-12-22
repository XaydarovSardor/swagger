export const Title = ({ title, desc }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{desc}</p>
        </div>

    )
}
