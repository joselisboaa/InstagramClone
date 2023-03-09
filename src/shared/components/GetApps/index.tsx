import AppStoreLogo from "@/shared/assets/app-store.png";
import GooglePlayLogo from "@/shared/assets/google-play.png";

export const GetApps: React.FC = () => {
  return (
    <div className="getapp">
      <p>Obtenha o aplicativo.</p>
      <div className="images">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jos%C3%A9-lisboa-3316301a2/"
        >
          <img src={AppStoreLogo} alt="baixar na app store" />
        </a>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9C20BAAF-8B29-45AF-BF38-54411BD99B80%26utm_content%3Dlo%26utm_medium%3Dbadge"
        >
          <img
            src={GooglePlayLogo}
            alt="baixar no google play"
          />
        </a>
      </div>
    </div>
  )
}