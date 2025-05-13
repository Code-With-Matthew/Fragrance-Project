import React from 'react'

import { 
  FiArrowRight, 
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiX,
  FiMenu,
} from 'react-icons/fi'

interface IconProps {
  name: IconName
  className?: string
  onClick?: () => void
}

export type IconName = 
  | 'arrow-right'
  | 'cart'
  | 'user'
  | 'search'
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'close'
  | 'menu'
  | 'menu'

export const Icon = ({ name, className, onClick }: IconProps) => {
  const iconMap: Record<IconName, React.JSX.Element> = {
    'arrow-right': <FiArrowRight />,
    'cart': <FiShoppingCart />,
    'user': <FiUser />,
    'search': <FiSearch />,
    'facebook': <FiFacebook />,
    'instagram': <FiInstagram />,
    'twitter': <FiTwitter />,
    'close': <FiX />,
    'menu': <FiMenu />,
  }

  return (
    <span 
      className={`inline-block ${className}`}
      onClick={onClick}
      role="img"
      aria-label={name}
    >
      {iconMap[name]}
    </span>
  )
}