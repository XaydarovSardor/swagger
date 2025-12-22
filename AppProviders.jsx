import { AuthProvider } from "./src/context/auth/AuthProvider"
import { DepartmentProvider } from "./src/context/departments/DepartmentProvider"

const providers = [AuthProvider,DepartmentProvider]
export const AppProviders = ({ children }) => {
    return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children)
}