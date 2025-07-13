export const BtnDefault = ({ name, backgroundColor, color = 'white' }) => {
    const contentStyle = {
        backgroundColor,
        color,
        borderRadius: '5px',
        cursor: 'pointer'
    }
    return <button style={contentStyle}>{name}</button>

} 