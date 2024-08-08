import { Button, Flex, Image, Link, useColorMode, Text, } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import homeIcon from "../assets/HomeIcon.png";
import avatarIcon from "../assets/avatar-icon.png";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const user = useRecoilValue(userAtom);
	const logout = useLogout();
	const setAuthScreen = useSetRecoilState(authScreenAtom);

	return (

		
		<Flex justifyContent={"space-between"} mt={6} mb='12'>
			{user && (
				<Link as={RouterLink} to='/'>
					<AiFillHome size={35} />
				</Link>
			)}
			{!user && (
				<Link as={RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}>
					
				</Link>
			)}

{user && (
  <Link as={RouterLink} to='/'>
    <Image src={homeIcon} alt="Home" w={20} h={20} />
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
				<Flex alignItems={"center"} gap={4}>
					<Link as={RouterLink} to={`/${user.username}`}>
						<RxAvatar size={35} />
					</Link>
					<Link as={RouterLink} to={`/${user.username}`}>
    <Image src={avatarIcon} alt="Avatar" w={8} h={8} />
  </Link>

  <Flex direction="column" alignItems="center" gap={2}>
    <Link as={RouterLink} to='/'>
      <Image src={homeIcon} alt="Home" w={8} h={8} />
    </Link>
    <Text fontSize="xs">Home</Text>
  </Flex>
					<Link as={RouterLink} to={`/settings`}>
						<MdOutlineSettings size={35} />
					</Link>
					<Button size={"xs"} onClick={logout}>
						<FiLogOut size={35} />
					</Button>
				</Flex>
			)}

		</Flex>
	);
};

export default Header;
