import { UserPlus } from 'lucide'
import { UserPlus2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export const AdminSideBar = () => {
    return (
        <div className="w-64 bg-white shadow-md p-4">
            <h2 className="text-xl font-bold mb-6 text-indigo-600">
                Admin Panel
            </h2>

            <nav className="flex flex-col gap-3">
                <Link
                    to="/admin/staff"
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
                >
                    <UserPlus2 size={18} />
                    <span>Create Staff</span>
                </Link>

                <Link
                    to="/admin/departments"
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
                >
                    Departments
                </Link>
            </nav>
        </div>
    )
}
