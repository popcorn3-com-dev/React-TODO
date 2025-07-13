export const ColorfulMessage = ({ color, message }) => {
  const contentStyle = {
    color,
    fontSize: '16px',
  };
  return <p style={contentStyle}>{message}</p>
}
