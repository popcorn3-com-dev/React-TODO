export const ColorfulMessage = ({ color, message }) => {
    const contentStyle = {
        color,
        fontWeight: 'bold'
    }
    return <p style={contentStyle}>{message}</p>
}