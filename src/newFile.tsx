import React from 'react';

type ButtonProps = {
  // 👇️ type as React.CSSProperties
  style: React.CSSProperties;
  children: React.ReactNode;
};

 export function Button({style, children}: ButtonProps) {
  return <button style={style}>{children}</button>;
}

// export const Buttoned = () => {
//   return (
//     <div>
//       <Button
//         style={{padding: '2rem', fontSize: '3rem', backgroundColor: 'lime'}}
//       >
//         Click
//       </Button>

//       <h2 style={{fontSize: '3rem'}}>Hello world</h2>
//     </div>
//   );
// };

