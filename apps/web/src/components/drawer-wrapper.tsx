import { ListIcon, XIcon } from "@phosphor-icons/react"
import { Button } from "@workspace/ui/components/button"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@workspace/ui/components/drawer"

type MobileLink = {
  readonly href: string
  readonly label: string
}

type DrawerWrapperProps = {
  readonly links: readonly MobileLink[]
  readonly menuLabel: string
}

export default function DrawerWrapper({ links, menuLabel }: DrawerWrapperProps) {
  return <Drawer direction="right">
    <DrawerTrigger className="mobile-menu-trigger" aria-label={menuLabel}><ListIcon aria-hidden="true" /></DrawerTrigger>
    <DrawerContent className="mobile-drawer">
      <DrawerHeader>
        <DrawerTitle>{menuLabel}</DrawerTitle>
        <DrawerClose><Button variant="ghost" size="icon-sm" aria-label="Close"><XIcon aria-hidden="true" /></Button></DrawerClose>
      </DrawerHeader>
      <nav className="mobile-drawer-links" aria-label={menuLabel}>{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    </DrawerContent>
  </Drawer>
}
