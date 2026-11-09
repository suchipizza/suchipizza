import scene from '../husky-cat-food/profile.config.ts';
import { defineProfile } from '../../src/config.ts';

export default defineProfile({
  ...scene,
  title: 'Welcome to my page',
  scene: {
    ...scene.scene,
    eyebrow: '',
    label: 'MY STACK: COMPLEX SYSTEMS. CURIOUS AGENTS. UNSUPERVISED SNACKS.',
  },
});
