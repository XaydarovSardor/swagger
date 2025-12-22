import { useState } from "react"
import { Title } from "../../components/Title"
import { useDepartment } from "../../context/departments/useDepartment"

export const CreateDepartment = () => {


  const [departmentName, setDepartmentName] = useState("")
  const { departments, loading, departmentErr, createDepartmentFunc,deleteDepartmentFunc } = useDepartment()
  const newDepartment = async (e) => {
    e.preventDefault()
    await createDepartmentFunc(data)
  }
  const data = {
    depType: "FACULTY",
    nameUz: departmentName,
    nameEn: departmentName,
    nameRu: departmentName,
    isBlocked: false
  }
  return (
    <div className="flex flex-col gap-6">
      <Title
        title="Department yaratish"
        desc="Yangi bo‘lim qo‘shish va mavjud bo‘limlarni ko‘rish"
      />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Yangi department
          </h2>

          <form onSubmit={(e) => newDepartment(e)} className="flex flex-col gap-4">
            <input
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              type="text"
              placeholder="Department nomi"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Department haqida qisqacha"
              rows={4}
              className="p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="self-start px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              {loading ? "Department creating..." : "Create Department"}
            </button>
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
                    <button onClick={()=>deleteDepartmentFunc(dep.id)} className="self-start px-6 py-1 bg-red-600 text-white rounded-lg hover:bg-indigo-700 transition">Delete</button>
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
