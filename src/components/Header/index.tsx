import { Menu } from '../../types/Menu';
import { MenuButton } from '../MenuButton';
import logoSVG from './../../assets/income.svg'
import { Container, Content } from './styles'

type HeaderProps = {
    selectedMenuId: number;
    menus: Menu[];
    handleClickButton: (id: number) => void;
}

export const Header = ({ selectedMenuId, menus, handleClickButton }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <img src={logoSVG} alt="S.C" />
                <div>
                    {menus.map(menu => (
                        <MenuButton
                            key={String(menu.id)}
                            title={menu.title}
                            iconName={menu.name}
                            onClick={() => handleClickButton(menu.id)}
                            selected={selectedMenuId === menu.id}
                        />
                    ))}
                </div>
            </Content>
        </Container>
    );
}