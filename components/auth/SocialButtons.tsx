'use client'

import { signIn } from 'next-auth/react'
import { Button } from '../ui/Button'
import { Icon, type IconName } from '../ui/Icon' 

interface SocialButtonProps {
  providers?: ('google' | 'github' | 'facebook')[]
  loading?: boolean
}

// Tambahkan type untuk provider
type ProviderType = 'google' | 'github' | 'facebook'

export const SocialButtons = ({ providers = ['google'], loading }: SocialButtonProps) => {
  const getProviderInfo = (provider: ProviderType) => {
    switch (provider) {
      case 'google':
        return { 
          name: 'Google', 
          icon: 'google' as IconName, 
          color: 'bg-red-600' 
        }
      case 'github':
        return { 
          name: 'GitHub', 
          icon: 'github' as IconName,
          color: 'bg-gray-800' 
        }
      case 'facebook':
        return { 
          name: 'Facebook', 
          icon: 'facebook' as IconName,
          color: 'bg-blue-600' 
        }
      default:
        return { 
          name: '', 
          icon: '' as IconName,
          color: '' 
        }
    }
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Atau lanjutkan dengan</span>
        </div>
      </div>

      {providers.map(provider => {
        const { name, icon, color } = getProviderInfo(provider)
        
        return (
          <Button
            key={provider}
            variant="outline"
            className={`w-full ${color} hover:${color} text-white`}
            onClick={() => signIn(provider)}
            disabled={loading}
          >
            <Icon name={icon} className="h-5 w-5 mr-2" />
            <span>{name}</span>
          </Button>
        )
      })}
    </div>
  )
}