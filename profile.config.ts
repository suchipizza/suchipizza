import scene from './examples/noemie-profile/profile.config.ts';
import { defineProfile } from './src/config.ts';

// My profile scene: a black-and-white husky, a black cat, and unsupervised snacks.
// Override the theme, characters, props, or choreography here to make changes.
export default defineProfile({
  ...scene,
});
