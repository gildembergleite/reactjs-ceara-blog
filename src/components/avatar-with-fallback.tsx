import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitialLettersOfName } from '@/utils/get-initial-letters-of-name'
import { AvatarProps } from '@radix-ui/react-avatar'
import { UserIcon } from 'lucide-react'

interface AvatarWithFallbackProps extends AvatarProps {
  image: string | undefined
  name: string | undefined
}

export function AvatarWithFallback({
  image,
  name,
  ...props
}: AvatarWithFallbackProps) {
  return (
    <Avatar {...props}>
      <AvatarImage src={image} alt="" />
      <AvatarFallback>
        {name ? (
          getInitialLettersOfName(name)
        ) : (
          <UserIcon className="w-5 h-5 text-muted-foreground" />
        )}
      </AvatarFallback>
    </Avatar>
  )
}
