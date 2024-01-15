// function Input(props) {
//   const { type, placeholder, name, ref } = props;
//   return <input type={type} className="text-sm border rounded w-full px-3 py-2 text-slate-700 placeholder-50" placeholder={placeholder} name={name} id={name} ref={ref} />;
// }

import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return <input type={type} className="text-sm border rounded w-full px-3 py-2 text-slate-700 placeholder-50" placeholder={placeholder} name={name} id={name} ref={ref} />;
});

export default Input;
