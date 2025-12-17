import { Link } from "react-router-dom"
import { Title } from "../components"

export const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-indigo-500 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Ilmiy tadqiqotlarni boshqarish tizimi</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Mualliflar tomonidan chop etilgan ilmiy maqolalar, kitoblar, konferentsiya va dissertatsiyalar bilan tanishing.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link
                            to="/documents"
                            className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-100"
                        >
                            Hujjatlarni ko'rish
                        </Link>
                        <Link
                            to="/authors"
                            className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-indigo-600"
                        >
                            Mualliflarni ko'rish
                        </Link>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <h3 className="text-3xl font-bold text-center mb-12">Nima qila olasiz</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <Title title="Tadqiqotni qidirish" desc="Kalit so'zlar bo'yicha maqolalar, kitoblar va maqolalarni toping." />
                    <Title title="Mualliflarni ko'rish" desc="Mualliflar va ularning ilmiy ishlarini o'rganing." />
                    <Title title="Fayllarni yuklash" desc="Asosiy va ikkilamchi hujjat fayllariga kirish." />
                </div>
            </section>
        </div>
    )
}
