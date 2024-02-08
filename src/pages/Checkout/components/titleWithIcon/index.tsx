interface TitleWithIconProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const TitleWithIcon = ({
  title,
  subTitle,
  children,
}: TitleWithIconProps) => {
  return (
    <div className="sectionTitle">
      {children}
      <div>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};
