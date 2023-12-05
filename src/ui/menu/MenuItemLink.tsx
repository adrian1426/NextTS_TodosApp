import Link from "next/link";

interface MenuItemLinkProps {
  href: string,
  icon?: React.ReactElement,
  label: string
}

const MenuItemLink = (props: MenuItemLinkProps) => {
  const { href, icon, label } = props;

  return (
    <Link href={href} style={{ color: "#64CCC5" }}>
      <>
        {icon}
        {label}
      </>
    </Link>
  );
};

export default MenuItemLink;