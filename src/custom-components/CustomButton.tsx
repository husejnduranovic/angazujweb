

export interface IButton {
    onClick: () => void,
    text: string,
    buttonStyle: string,
    buttonSize: string

}

const STYLE = [
    'btn-primary',
    'btn-secondary',
    'btn-warning',
    'btn-success',
    'btn-danger',
    'btn-info',
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-warning',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-info'
]

const SIZE = [
    'btn-lg',
    'btn-sm'
]

const CustomButton: React.FC<IButton> = (props: any) => {

       const checkingButtonStyle = STYLE.includes(props.buttonStyle) ? props.buttonStyle : STYLE[0];

       const checkingButtonSize = SIZE.includes(props.buttonSize) ? props.buttonSize : ''
 
     return (
        <button className={`btn ${checkingButtonStyle} ${checkingButtonSize}`}>
            {props.text}
        </button>
     )
}


export default CustomButton;