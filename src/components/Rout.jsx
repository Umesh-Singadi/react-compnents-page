import useNavigationContext from "../hooks/useNavigation";

function Rout({ path, children }) {
  const { currentPath } = useNavigationContext();
  if (currentPath === path) {
    return children;
  }
  return null;
}

export default Rout;
