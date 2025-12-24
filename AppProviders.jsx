import { AuthProvider } from "./src/context/auth/AuthProvider"
import { DepartmentProvider } from "./src/context/departments/DepartmentProvider"
import { StaffProvider } from "./src/context/staff/StaffProvider"

const providers = [AuthProvider,DepartmentProvider,StaffProvider]
export const AppProviders = ({ children }) => {
    return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children)
}