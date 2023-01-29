import Image from "next/image";
import { ContainerSideHeader } from "./style";



const SideHeader: React.FC = () => {
  return (
    <ContainerSideHeader>
      <Image src='/images/logoDark.svg' alt="" width='65' height='65' />
    </ContainerSideHeader>
  )
}

export { SideHeader };