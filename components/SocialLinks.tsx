import { Facebook, GitHub, Globe, Instagram, Linkedin } from 'react-feather';

interface Props {
  color?: string
}

function SocialLinks(props: Props) {
  return <div className="flex lg:mt-4 opacity-70 items-center">
    <a
      href="https://www.linyuanlin.com"
      className="ml-4 lg:ml-0"
      target="_blank"
      rel="noreferrer">
      <Globe size={18} color={props.color} />
    </a>
    <a
      href="https://github.com/ken20001207"
      className="ml-4"
      target="_blank"
      rel="noreferrer">
      <GitHub size={18} color={props.color} />
    </a>
    <a
      href="https://www.linkedin.com/in/yuanlin-lin-75a992202"
      className="ml-4"
      target="_blank"
      rel="noreferrer">
      <Linkedin size={18} color={props.color} />
    </a>
    <a
      href="https://www.instagram.com/yuanlin___/"
      className="ml-4"
      target="_blank"
      rel="noreferrer">
      <Instagram size={18} color={props.color} />
    </a>
    <a
      href="https://www.facebook.com/ken20001207"
      className="ml-4"
      target="_blank"
      rel="noreferrer">
      <Facebook size={18} color={props.color} />
    </a>
  </div>;
}

export default SocialLinks;