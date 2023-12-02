interface AppLogoProps {
  title: string
}

const AppLogo = (props: AppLogoProps) => {
  const { title } = props;

  return (
    <div style={{ color: 'white' }}>
      {title}
    </div>
  );
};

export default AppLogo;