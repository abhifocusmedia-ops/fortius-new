export type Coach = {
  name: string;
  specialty: string;
  description: string;
  image: string;
};

// Team names and photography are sourced from the current Team Fortius and
// badminton coaching pages at fsaatl.com.
export const COACHES: Coach[] = [
  {
    name: 'Heymard',
    specialty: 'Badminton coaching',
    description: 'Build a strong foundation, sharpen your technique, and grow your confidence on court.',
    image:
      'https://static.wixstatic.com/media/3f5dd9_c6fbab9e40154e1cae5f4763ab308263~mv2.png/v1/crop/x_249,y_522,w_1810,h_1807/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/heymard-no-bg.png',
  },
  {
    name: 'Daniel',
    specialty: 'Badminton coaching',
    description: 'Turn practice into progress with structured drills for players ready to level up.',
    image:
      'https://static.wixstatic.com/media/402959_6f21b84df7254c77bb0b95cd01c8b12b~mv2.png/v1/crop/x_126,y_0,w_1440,h_1440/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PXL_20260218_012115831_edited_edited_edited.png',
  },
  {
    name: 'Kathir',
    specialty: 'Badminton coaching',
    description: 'Develop movement, consistency, and match awareness through focused training.',
    image:
      'https://static.wixstatic.com/media/3f5dd9_56f557d1cc03437d93085f2c52fe361a~mv2.png/v1/crop/x_300,y_332,w_969,h_970/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kathir-No-BG.png',
  },
  {
    name: 'Sanjeeth',
    specialty: 'Badminton coaching',
    description: 'Train with purpose through engaging sessions designed for all levels of play.',
    image:
      'https://static.wixstatic.com/media/3f5dd9_4ad900ffc8ac47fe963fb113f1c1fdea~mv2.jpg/v1/crop/x_207,y_354,w_785,h_784/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20251129-WA0002-Picsart-BackgroundRemover.jpg',
  },
  {
    name: 'Vinh',
    specialty: 'Multi-sport coaching',
    description: 'Find the right rhythm for your goals, from first session to competitive play.',
    image:
      'https://static.wixstatic.com/media/3f5dd9_c844f7e6b5ff426dbbe54046139ed26d~mv2.png/v1/crop/x_71,y_175,w_484,h_485/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PXL_20250828_213827408_MP.png',
  },
];
