import { CellPhone, Login, Footer } from "../../shared/components"

export const LoginPage: React.FC = () => {
  return (
    <div className="main-container">
      <div className="main-content">
          <CellPhone />
          <Login />
      </div>
      <Footer />
    </div>
  )
}