import { logoIconsList } from '../constants/index.js'
const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  )
}

const LogoSection = () => {

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="marquee h-50">
        <div className="marquee-box md:gap-15 gap-7">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection