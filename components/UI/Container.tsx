type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 max-md:pt-8">{children}</div>
  );
}
