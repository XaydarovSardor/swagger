import { useState } from "react"
import { Title } from "../../components/Title"
import { useDepartment } from "../../context/departments/useDepartment"

export const CreateDepartment = () => {


  const [formData, setFormData] = useState({
    depType: "FACULTY",
    nameUz: "",
    nameEn: "",
    nameRu: "",
    isBlocked: false,
  })

  const { departments, loading, departmentErr, createDepartmentFunc, deleteDepartmentFunc } = useDepartment()
  const newDepartment = async (e) => {
    e.preventDefault()
    await createDepartmentFunc(formData)
    setFormData({
      depType: "FACULTY",
      nameUz: "",
      nameEn: "",
      nameRu: "",
      isBlocked: false,
    })
  }
  return (
    <div className="flex flex-col gap-6">
      <Title
        title="Department yaratish"
        desc="Yangi bo‘lim qo‘shish va mavjud bo‘limlarni ko‘rish"
      />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-700">
            Yangi department yaratish
          </h2>

          <form onSubmit={newDepartment} className="grid grid-cols-2 gap-5">

            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">
                Department turi
              </label>
              <select required value={formData.depType} onChange={(e) => setFormData({
                ...formData,
                depType: e.target.value
              })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Department turini tanlang</option>
                <option value="FACULTY">FACULTY</option>
                <option value="CONFERENCE">CONFERENCE</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Nomi (UZ)
              </label>
              <input
                required
                value={formData.nameUz}
                onChange={(e) => setFormData({
                  ...formData,
                  nameUz: e.target.value
                })}
                type="text"
                placeholder="Masalan: Axborot texnologiyalari"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Nomi (EN)
              </label>
              <input
                required
                value={formData.nameEn}
                onChange={(e) => setFormData({
                  ...formData,
                  nameEn: e.target.value
                })}
                type="text"
                placeholder="For example: Information Technology"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">
                Nomi (RU)
              </label>
              <input
                required
                value={formData.nameRu}
                onChange={(e) => setFormData({
                  ...formData,
                  nameRu: e.target.value
                })}
                type="text"
                placeholder="Например: Информационные технологии"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="col-span-2 flex items-center gap-3 mt-2">
              <input
                checked={formData.isBlocked}
                onChange={(e) => setFormData({
                  ...formData,
                  isBlocked: e.target.checked,
                })}
                type="checkbox"
                id="isBlocked"
                className="w-4 h-4 accent-indigo-600"
              />
              <label htmlFor="isBlocked" className="text-sm text-gray-600">
                Department bloklangan (faol emas)
              </label>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Create Department
              </button>
            </div>

          </form>
        </div>


        <div className="col-span-1 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Departmentlar
          </h2>
          {loading && (
            <p className="text-indigo-500 text-sm">Departments yuklanmoqda...</p>
          )}

          {!loading && !departmentErr && (
            <ul className="flex flex-col gap-3">
              {departments.length === 0 ? (
                <p className="text-gray-400 text-sm">
                  Hozircha department yo‘q
                </p>
              ) : (
                departments.map(dep => (
                  <li
                    key={dep.id}
                    className="p-3 border rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{dep.nameUz}</p>
                      <p className="text-xs text-gray-400">{dep.depType}</p>
                    </div>

                    <span
                      className={`text-xs px-2 py-1 rounded ${dep.isBlocked
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                        }`}
                    >
                      {dep.isBlocked ? "Blocked" : "Active"}
                    </span>
                    <button onClick={() => deleteDepartmentFunc(dep.id)} className="self-start px-6 py-1 bg-red-600 text-white rounded-lg hover:bg-indigo-700 transition">Delete</button>
                  </li>
                ))
              )}
            </ul>
          )}


        </div>

      </div>

    </div>
  )
}
