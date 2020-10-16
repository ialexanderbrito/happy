import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import { View, TouchableOpacity, Image } from 'react-native';

import earth from '../../assets/images/earth.png';
import kids from '../../assets/images/kids.png';

const Next = ({ ...props }) => (
  <RectButton
    {...props}
    style={{
      width: 56,
      height: 56,
      backgroundColor: '#F8ECD3',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 25,
    }}
  >
    <Feather name="arrow-right" size={24} color="#E3A800" />
  </RectButton>
);

const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#FFD666' : '#F2DAAA';
  } else {
    backgroundColor = selected ? '#FFD666' : '#F2DAAA';
  }
  return (
    <View
      style={{
        width: 8,
        height: 4,
        borderRadius: 4,
        marginHorizontal: 130,
        marginLeft: -115,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity
    {...props}
    style={{
      width: 56,
      height: 56,
      backgroundColor: '#F8ECD3',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 25,
    }}
  >
    <Feather name="arrow-right" size={24} color="#E3A800" />
  </TouchableOpacity>
);

const InitialOnboarding: React.FC = () => {
  const { replace } = useNavigation();

  function handleNavigateToOrphanagesMap() {
    replace('OrphanagesMap');
  }
  return (
    <Onboarding
      bottomBarHeight={100}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Square}
      showSkip={false}
      bottomBarColor="#EBF2F5"
      onDone={handleNavigateToOrphanagesMap}
      pages={[
        {
          backgroundColor: '#EBF2F5',
          image: <Image source={earth} style={{ marginTop: -40 }} />,
          title: `Leve${'\n'}felicidade${'\n'}para o${'\n'}mundo`,
          subtitle: `Visite os orfanatos e mude${'\n'}o dia dessas crianças.`,
          titleStyles: {
            fontFamily: 'Nunito_800ExtraBold',
            marginTop: -40,
            marginLeft: -80,
            color: '#2AB5D1',
            textAlign: 'left',
            fontSize: 48,
          },
          subTitleStyles: {
            fontFamily: 'Nunito_600SemiBold',
            color: '#5C8599',
            textAlign: 'left',
            marginLeft: -90,
          },
        },
        {
          backgroundColor: '#EBF2F5',
          image: <Image style={{ marginTop: -40 }} source={kids} />,
          title: '',
          subtitle: `Escolha um${'\n'}orfanato no mapa e${'\n'}faça uma visita`,
          subTitleStyles: {
            marginTop: -60,
            fontFamily: 'Nunito_800ExtraBold',
            color: '#2AB5D1',
            lineHeight: 36,
            fontSize: 30,
            textAlign: 'right',
            marginRight: -40,
          },
        },
      ]}
    />
  );
};

export default InitialOnboarding;
