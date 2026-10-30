import type { Component } from 'react';

interface Props {
  Wrapper: Component;
  name: string;
}

// funcionalidad sin alterar el component 

// export const WithAnalytics = () => {

//   const With
//   return (
//     <div>WithAnalytics</div>
//   )
// }

export const withAnalytics = ({ Wrapper, name }: Props) => {
  const WithAnalytics = (props) => {
    return <Wrapper {...props} logo={'testing'} />;
  };

  WithAnalytics.displayName = `${name}-withAnalytic`;

  return WithAnalytics;
};
