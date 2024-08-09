import { Button, Flex, Image, Link, useColorMode, Text, } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

import { Link as RouterLink } from "react-router-dom";

import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom";

import homeIcon from "../assets/HomeIcon.png";
import avatarIcon from "../assets/avatar-icon.png";



import settingsIcon from "../assets/settings.png";
import logoutIcon from "../assets/logout2.png";


const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const user = useRecoilValue(userAtom);
	const logout = useLogout();
	const setAuthScreen = useSetRecoilState(authScreenAtom);

	return (

		
		<Flex justifyContent={"space-between"} mt={6} mb='12'>

{user && (
  <Flex direction="column" alignItems="center" gap={2}>
    <Link as={RouterLink} to='/'>
      <Image src={homeIcon} alt="Home" w={14} h={14} />
    </Link>
    <Text fontSize="xs">Home Screen</Text>
  </Flex>
)}

{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}>
					
				</Link>
)}

<Image
				cursor={"pointer"}
				alt='logo'
				w={6}
				src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
				onClick={toggleColorMode}
			/>


{user && (
  <Flex direction="column" alignItems="center" gap={2}>
    <Link as={RouterLink} to={`/${user.username}`}>
      <Image src={avatarIcon} alt="Avatar" w={14} h={14} />
    </Link>
    <Text fontSize="xs">Profile</Text>
  </Flex>
)}

{user && (
  <Flex direction="column" alignItems="center" gap={2}>
    <Link as={RouterLink} to={`/suggested`}>
      <Image src={settingsIcon} alt="Settings" w={14} h={14} />
    </Link>
    <Text fontSize="xs">Pet Friends</Text>
  </Flex>
)}
{user && (
  <Flex direction="column" alignItems="center" gap={2}>
    <Button size={"sm"} onClick={logout}>
      <Image src={logoutIcon} alt="Logout" w={8} h={8} />
    </Button>
    <Text fontSize="sm">Logout</Text>
  </Flex>
)}


		</Flex>
	);
};

export default Header;
