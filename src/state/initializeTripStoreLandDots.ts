import { getLandDots } from './getLandDots';
import { getWorldImageData } from './getWorldImageData';
import { useTripStore } from './tripStore';

export async function initializeTripStoreLandDots(worldImagePath: string) {
  const imageData = await getWorldImageData(worldImagePath);

  const { landDots, placesAtLandDotIndex } = await getLandDots(imageData);

  useTripStore.setState({ landDots, placesAtLandDotIndex });
}
