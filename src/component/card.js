const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

export { Card, CardHeader, CardContent, CardTitle };
