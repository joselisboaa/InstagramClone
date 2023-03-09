import InstaLogo from "@/shared/assets/insta-logo.png";
import { GetApps } from "../GetApps";
import { toggle } from "@/services/functions";

setInterval(() => toggle(), 3000)

export const Login: React.FC = () => {
  return (
    <div className="big-box">
      <div className="login-box">
        <img
          src={InstaLogo}
          alt="instagram logo"
          className="insta-logo"
        />
        <div className="label">
          <label id="user-id" className="user" htmlFor="userlogin">
            <span className="text-box">Telefone, nome de usuário ou email</span>
            <input type="text" name="user" value="" id="userlogin" />
            <div className="div"></div>
          </label>
        </div>
        <div className="label">
          <label id="user-password" className="password" htmlFor="password">
            <span className="text-box">Senha</span>
            <input
              type="password"
              name="password"
              id="password"
              aria-label="Senha"
              />
          </label>
          <div className="reveal">Ocultar</div>
        </div>
        <button type="submit">Entrar</button>
        <div className="or">
          <div className="line"></div>
          <div className="text">OU</div>
          <div className="line"></div>
        </div>
        <div className="with-fb">
          <span>
            <a target="_blank" href="https://www.facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#385185"
              >
                <path
                  d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                />
              </svg>
              Entrar com o Facebook
            </a>
          </span>
        </div>
        <div className="forget">
          <a href="https://www.instagram.com/accounts/password/reset/"
            >Esqueceu a senha?</a>
        </div>
      </div>
      <div className="register">
        <p>
          Não tem uma conta?
          <a href="https://www.instagram.com/accounts/emailsignup/">
            Cadastre-se
          </a>
        </p>
      </div>
      <GetApps />
    </div>
  )
}