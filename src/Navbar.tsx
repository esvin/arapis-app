import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router'
import * as React from 'react';

const pages = [
  { id: 'startSection', name: 'Inicio' },
  { id: 'aboutUsSection', name: 'Quienes somos' },
  { id: 'ourHoneySection', name: 'Nuestra Miel' },
  { id: 'associationSection', name: 'Asociación' },
  { id: 'blogSection', name: 'Noticias' },
  { id: 'contact', name: 'Contacto' },
];

const Navbar = () => {
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openOurHoney, setOpenOurHoney] = React.useState(false);
  const [openAssociation, setOpenAssociation] = React.useState(false);

  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleAboutNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenAbout(true);
    handleOpenNav(event.currentTarget);
  }
  const handleHoneyNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenOurHoney(true);
    handleOpenNav(event.currentTarget);
  }

  const handleAssociationNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenAssociation(true);
    handleOpenNav(event.currentTarget);
  }
  const handleCloseNav = () => {
    setOpenAbout(false);
    setOpenOurHoney(false);
    setOpenAssociation(false);
    setAnchorElNav(null);
  }

  const handleOpenNav = (currentTarget: HTMLButtonElement) => {
    setAnchorElNav(currentTarget);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  return (
    <AppBar position="absolute">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={Boolean(anchorElMenu)}
              onClose={handleCloseMenu}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
              >
                <List>
                  <ListItemButton>
                    <ListItemText primary="Inicio" />
                  </ListItemButton>
                  <ListItemButton onClick={() => setOpenAbout(!openAbout)}>
                    <ListItemText primary="Quienes somos" />
                    {openAbout ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openAbout} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                        router.push('/about', undefined, { shallow: true });
                        handleCloseMenu();
                      }}>
                        <ListItemText primary="Nuestra Historia" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                        router.push('/about', undefined, { shallow: true });
                        handleCloseMenu();
                      }}>
                        <ListItemText primary="Junta Directiva" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}  onClick={
                        () => {
                        router.push('/about', undefined, { shallow: true });
                        handleCloseMenu();
                      }}>
                        <ListItemText primary="Nuestros Socios" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton onClick={() => setOpenOurHoney(!openOurHoney)}>
                    <ListItemText primary="Nuestra Miel" />
                    {openOurHoney ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openOurHoney} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Productos" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Servicios" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Calidad" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton onClick={() => setOpenAssociation(!openAssociation)}>
                    <ListItemText primary="Asociación" />
                    {openAssociation ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openAssociation} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                        router.push('/asociation', undefined, { shallow: true });
                        handleCloseMenu();
                      }}>
                        <ListItemText primary="Mision y Vision" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                        router.push('/asociation', undefined, { shallow: true });
                        handleCloseMenu();
                      }}>
                        <ListItemText primary="Hazte Socio" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                        router.push('/asociation', undefined, { shallow: true });
                        handleCloseMenu();
                      }}>
                        <ListItemText primary="Proyectos" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton>
                    <ListItemText primary="Noticias" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Contacto" />
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </Box>
          {<img src="/logocolor.png" alt="ARAPIS Logo" height="64" width="72" />}
          <Box sx={{ flexGrow: 1, paddingLeft: 4, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleAboutNav}
              sx={{ my: 2, color: '#000000', display: 'block' }}
            >
              Quienes Somos
            </Button>
            <Button
              onClick={handleHoneyNav}
              sx={{ my: 2, color: '#000000', display: 'block' }}
            >
              Nuestra Miel
            </Button>
            <Button
              onClick={handleAssociationNav}
              sx={{ my: 2, color: '#000000', display: 'block' }}
            >
              Asociación
            </Button>
            <Menu
              id="ourHoneyMenu"
              anchorEl={anchorElNav}
              open={openAbout && anchorElNav !== null}
              onClose={handleCloseNav}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                router.push('/about', undefined, { shallow: true });
                handleCloseNav();
              }}>Nuestra Historia</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>Junta Directiva</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>Nuestros Socios</MenuItem>
            </Menu>
            <Menu
              id="aboutUsMenu"
              anchorEl={anchorElNav}
              open={openOurHoney && anchorElNav !== null}
              onClose={handleCloseNav}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => handleCloseNav}>Productos</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>Servicios</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>Calidad</MenuItem>
            </Menu>
            <Menu
              id="associationMenu"
              anchorEl={anchorElNav}
              open={openAssociation && anchorElNav !== null}
              onClose={handleCloseNav}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                router.push('/asociation', undefined, { shallow: true });
                handleCloseNav();
              }}>Mision y Vision</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>Hazte Socio</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>Proyectos</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
