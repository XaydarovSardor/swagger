import { useState } from "react"
import { useDepartment } from "../context/departments/useDepartment"
import { registerAuhor } from "../api"
import { useNavigate } from "react-router-dom"

export const RegisterAuthor = () => {
    const { departments } = useDepartment()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        hemisId: "",
        firstName: "",
        lastName: "",
        middleName: "",
        orcid: "4595-4625-6148-2275",
        departmentId: "",
    })
    const handleRegisterAuthor = async (e) => {
        e.preventDefault()
        await registerAuhor(formData)
        setFormData({
            email: "",
            hemisId: "",
            firstName: "",
            lastName: "",
            middleName: "",
            orcid: "",
            departmentId: "",
        })
        navigate("/login")
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Author ro'yxatdan o'tish
                </h1>
                <p className="text-gray-500 mb-6">
                    Muallif sifatida tizimga qo'shilish uchun ma'lumotlarni to'ldiring
                </p>

                <form onSubmit={handleRegisterAuthor} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({
                                ...formData,
                                email: e.target.value
                            })}
                            type="email"
                            placeholder="example@mail.com"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">HEMIS ID</label>
                        <input
                            value={formData.hemisId}
                            onChange={(e) => setFormData({
                                ...formData,
                                hemisId: e.target.value
                            })}
                            type="text"
                            placeholder="HEMIS ID"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">First name</label>
                        <input
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({
                                ...formData,
                                firstName: e.target.value
                            })}
                            type="text"
                            placeholder="Ism"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Last name</label>
                        <input
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({
                                ...formData,
                                lastName: e.target.value
                            })}
                            type="text"
                            placeholder="Familiya"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Middle name</label>
                        <input
                            value={formData.middleName}
                            onChange={(e) => setFormData({
                                ...formData,
                                middleName: e.target.value
                            })}
                            type="text"
                            placeholder="Otasining ismi"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">ORCID</label>
                        <input
                            disabled
                            value={formData.orcid}
                            onChange={(e) => setFormData({
                                ...formData,
                                orcid: e.target.value
                            })}
                            type="text"
                            placeholder="5578-0552-8501-8921"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-sm text-gray-600">Department</label>
                        {departments?.length > 0 ? (
                            <select required onChange={(e) => setFormData({
                                ...formData,
                                departmentId: Number(e.target.value)
                            })}
                                className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Select department</option>
                                {departments.map(dep => (
                                    <option className="flex gap-3" key={dep.id} value={dep.id}>
                                        <span>{dep.nameUz}</span>
                                        <span>({dep.depType})</span>
                                    </option>
                                ))}
                            </select>
                        ) : <h2>Department hali yaratilinmagan</h2>}
                    </div>

                    <div className="md:col-span-2 flex justify-end mt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                            Register as Author
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
