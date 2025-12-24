import { useState } from "react"
import { useDepartment } from "../../context/departments/useDepartment"
import { useStaff } from "../../context/staff/useStaff"

export const CreateStaff = () => {
  const { departments } = useDepartment()
  const { loading, staffErr, createStaffFunc } = useStaff()
  const [formData, setFormData] = useState({
    "username": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "middleName": "",
    "departmentId": 0
  })
  const handleStaffFunc = async (e) => {
    e.preventDefault()
    await createStaffFunc(formData)
    setFormData({
      "username": "",
      "password": "",
      "firstName": "",
      "lastName": "",
      "middleName": "",
      "departmentId": 0
    })
  }
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Foydalanuvchilar
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-xl p-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">john@example.com</p>

              <span className="w-fit text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-600">
                ADMIN
              </span>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm rounded-lg border text-gray-600 hover:bg-gray-100">
                Edit
              </button>
              <button className="px-3 py-1 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                Delete
              </button>
            </div>
          </div>

          <div className="border rounded-xl p-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-gray-800">Alice Smith</p>
              <p className="text-sm text-gray-500">alice@example.com</p>

              <span className="w-fit text-xs px-2 py-1 rounded bg-green-100 text-green-600">
                STAFF
              </span>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm rounded-lg bg-indigo-600 cursor-pointer text-white hover:bg-indigo-700">
                Edit
              </button>
              <button className="px-3 py-1 text-sm rounded-lg bg-red-500 cursor-pointer text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {staffErr && <p className="text-red-600 font-semibold">{staffErr}</p>}
      <form onSubmit={handleStaffFunc} className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            required
            value={formData.username}
            onChange={(e) => setFormData({
              ...formData,
              username: e.target.value
            })}
            type="text"
            placeholder="Username"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            required
            value={formData.password}
            onChange={(e) => setFormData({
              ...formData,
              password: e.target.value
            })}
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            required
            value={formData.firstName}
            onChange={(e) => setFormData({
              ...formData,
              firstName: e.target.value
            })}
            type="text"
            placeholder="First name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            required
            value={formData.lastName}
            onChange={(e) => setFormData({
              ...formData,
              lastName: e.target.value
            })}
            type="text"
            placeholder="Last name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Middle Name
          </label>
          <input
            value={formData.middleName}
            onChange={(e) => setFormData({
              ...formData,
              middleName: e.target.value
            })}
            type="text"
            placeholder="Middle name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Department
          </label>
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

        <div className="md:col-span-2 flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            {loading ? "New Staff Creating..." : "Create Staff"}
          </button>
        </div>

      </form>
    </>
  )
}
