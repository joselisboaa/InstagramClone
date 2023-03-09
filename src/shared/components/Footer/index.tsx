import { FooterHelperText, SelectFooter } from "../"

export const Footer: React.FC = () => {
  return (
    <footer className="footer-content">
        <div className="boxes">
         <FooterHelperText/>
        </div>
        <div className="lang">
          <SelectFooter/>
          <span>
            2022 Cloned by
            <a target="_blank" href="https://github.com/1mmanuelKant"
              >1mmanuelKant</a>
          </span>
        </div>
      </footer>
  )
}