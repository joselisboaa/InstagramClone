import WomanAndCat from "@/shared/assets/mulher-e-gato.png";
import Chat from "@/shared/assets/chat.png";
import ImgInsta from "@/shared/assets/imginsta.png";
import Reels from "@/shared/assets/reels.png";

export const CellPhone: React.FC = () => {
  return (
  <div className="cellphone">
    <img
      src={WomanAndCat}
      alt="foto de mulher segurando um gato"
      className="cellphoto"
    />
    <img
      src={Chat}
      alt="foto de uma conversa"
      className="cellphoto"
    />
    <img
      src={ImgInsta}
      alt="foto de um perfil"
      className="cellphoto"
    />
    <img
      src={Reels}
      alt="reels do instagram"
      className="cellphoto"
    />
  </div>
)
}