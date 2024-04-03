import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitialLettersOfName } from '@/utils/get-initial-letters-of-name'
import { UserIcon } from 'lucide-react'

interface AvatarWithFallbackProps {
  image: string | undefined
  name: string | undefined
}

export function AvatarWithFallback(props: AvatarWithFallbackProps) {
  return (
    <Avatar>
      <AvatarImage src={props.image} alt="" />
      <AvatarFallback>
        {props.name ? (
          getInitialLettersOfName(props.name)
        ) : (
          <UserIcon className="w-5 h-5 text-muted-foreground" />
        )}
      </AvatarFallback>
    </Avatar>
  )
}
