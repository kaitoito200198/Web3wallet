/* eslint-disable jsx-a11y/img-redundant-alt */
/*
  @Author:Satellite
  @CreatedAt:2024/4/14
*/
const Button = ({ name, icon, onClick,className}) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <img src={icon} width={20} height={20} alt="image"></img>
      <span>{name}</span>
    </button>
  );
};

export default Button;
