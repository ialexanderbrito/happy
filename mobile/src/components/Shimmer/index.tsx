import React from 'react';
import { useTheme } from 'styled-components';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';

const Shimmer: React.FC = () => {
  const theme = useTheme();

  return (
    <ContentLoader
      speed={1}
      width={400}
      height={1000}
      viewBox="0 0 400 1000"
      backgroundColor={theme.isLighten ? '#FFF' : '#222'}
      foregroundColor={theme.isLighten ? '#e8e8e8' : '#333'}
    >
      <Circle cx="60" cy="51" r="3" />
      <Rect x="-6" y="-5" rx="0" ry="0" width="511" height="221" />
      <Rect x="-2" y="251" rx="0" ry="0" width="118" height="34" />
      <Rect x="10" y="225" rx="0" ry="0" width="0" height="1" />
      <Rect x="1" y="307" rx="0" ry="0" width="290" height="13" />
      <Rect x="1" y="331" rx="0" ry="0" width="373" height="13" />
      <Rect x="18" y="375" rx="0" ry="0" width="304" height="158" />
      <Rect x="-10" y="583" rx="0" ry="0" width="316" height="30" />
      <Rect x="-11" y="644" rx="0" ry="0" width="320" height="13" />
      <Rect x="-17" y="665" rx="0" ry="0" width="362" height="15" />
      <Rect x="12" y="710" rx="0" ry="0" width="146" height="151" />
      <Rect x="177" y="711" rx="0" ry="0" width="150" height="150" />
      <Rect x="13" y="903" rx="0" ry="0" width="310" height="46" />
      <Rect x="2" y="551" rx="0" ry="0" width="356" height="5" />
      <Rect x="109" y="633" rx="0" ry="0" width="0" height="4" />
    </ContentLoader>
  );
};

export default Shimmer;
