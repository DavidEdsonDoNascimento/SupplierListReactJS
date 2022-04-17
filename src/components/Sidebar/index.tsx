import { Menu } from '../../types/Menu';
import { MenuButton } from '../MenuButton';
import { Container, ContainerMenus } from './styles';

type SideBarProps = {
  selectedMenuId: number;
  menus: Menu[];
  handleClickButton: (id: number) => void;
}
export const SideBar = ({ selectedMenuId, menus, handleClickButton }: SideBarProps) => {

  return (
    <Container>
      <span>S<p>C</p></span>

      <ContainerMenus>
        {menus.map(menu => (
          <MenuButton
            key={String(menu.id)}
            title={menu.title}
            iconName={menu.name}
            onClick={() => handleClickButton(menu.id)}
            selected={selectedMenuId === menu.id}
          />
        ))}
      </ContainerMenus>
    </Container>
  );
}