import * as React from 'react';
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
import { useRouter } from 'next/router';
import LanSwitchLink from '../src/LanSwitchLink';
import i18nextConfig from '../next-i18next.config';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getStaticPaths, makeStaticProps } from '../lib/getStatic';


const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openOurHoney, setOpenOurHoney] = React.useState(false);
  const [openAssociation, setOpenAssociation] = React.useState(false);

  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

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
                    <img src="/logogrande.png" height="65" alt="" />
                  </ListItemButton>
                  <ListItemButton onClick={() => setOpenAbout(!openAbout)}>
                    <ListItemText primary={t('aboutUsNav')}/>
                    {openAbout ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openAbout} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                          router.push('/about', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('ourStoryNav')} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                          router.push('/about', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('boardOfDirectorsNav')} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                          router.push('/about', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('ourAssocNav')} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton onClick={() => setOpenOurHoney(!openOurHoney)}>
                    <ListItemText primary={t('ourHoneyNav')} />
                    {openOurHoney ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openOurHoney} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={() => {
                          router.push('/product', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('productsNav')} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={() => {
                          router.push('/product', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('servicesNav')} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}  onClick={() => {
                          router.push('/product', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('qualityNav')} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton onClick={() => setOpenAssociation(!openAssociation)}>
                    <ListItemText primary={t('asociationNav')} />
                    {openAssociation ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openAssociation} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                          router.push('/asociation', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('mAndVNav')} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                          router.push('/asociation', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('joinUsNav')} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={
                        () => {
                          router.push('/asociation', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                        <ListItemText primary={t('projectsNav')} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                          router.push('/blog', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                    <ListItemText primary={t('newsNav')} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => {
                          router.push('/contact', undefined, { shallow: true });
                          handleCloseMenu();
                        }}>
                    <ListItemText primary={t('contactUsNav')} />
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
              {t('aboutUsNav')}
            </Button>
            <Button
              onClick={handleHoneyNav}
              sx={{ my: 2, color: '#000000', display: 'block' }}
            >
              {t('ourHoneyNav')}
            </Button>
            <Button
              onClick={handleAssociationNav}
              sx={{ my: 2, color: '#000000', display: 'block' }}
            >
            {t('asociationNav')}
            </Button>
            <Button
              sx={{ my: 2, color: '#000000', display: 'block' }}
              onClick={() => {
                router.push('/blog', undefined, { shallow: true });
                handleCloseMenu();
              }}
            >
            {t('newsNav')}
            </Button>
            <Button
              sx={{ my: 2, color: '#000000', display: 'block' }}
              onClick={() => {
                router.push('/contact', undefined, { shallow: true });
                handleCloseMenu();
              }}
            >
            {t('contactUsNav')}
            </Button>
            {i18nextConfig.i18n.locales.map((locale) => {
              if (locale === currentLocale) return null
              return (
                <LanSwitchLink
                  locale={locale}
                  key={locale}
                />
              )
            })}
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
              }}>{t('ourStoryNav')}</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>{t('boardOfDirectorsNav')}</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>{t('ourAssocNav')}</MenuItem>
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
              <MenuItem onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                router.push('/product', undefined, { shallow: true });
                handleCloseNav();
              }}>{t('productsNav')}</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>{t('servicesNav')}</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>{t('qualityNav')}</MenuItem>
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
              }}>{t('mAndVNav')}</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>{t('joinUsNav')}</MenuItem>
              <MenuItem onClick={() => handleCloseNav}>{t('projectsNav')}</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;