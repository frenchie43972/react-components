import classNames from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline, 
  rounded,
  ...rest
}) {

  //The outline class is flawed; it does not render colored text when changed
  const classes = classNames('flex items-center px-3 py-2 border min-w-32 m-0.5', {
    'border-blue-600 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-500 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-600': outline && primary,
    'text-black': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  });

  return (
    <button className={ classes }>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger
  }) => { 
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)
    
    if (count > 1) {
      return new Error('Only one button type may be true (primary, secondary, etc)');
    }
  },
}

export default Button;