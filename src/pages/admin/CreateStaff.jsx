import { Title } from "../../components/Title"

export const CreateStaff = () => {
  return (
    <form className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-5">

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">
          Username
        </label>
        <input
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
          type="text"
          placeholder="Middle name"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">
          Department
        </label>
        <select
          className="p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select department</option>
          <option value="0">IT</option>
          <option value="1">HR</option>
          <option value="2">Finance</option>
        </select>
      </div>

      <div className="md:col-span-2 flex justify-end pt-4">
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Create Staff
        </button>
      </div>

    </form>
  )
}
